import cv2
import mediapipe as mp

from mediapipe.tasks import python
from mediapipe.tasks.python import vision


MODEL_PATH = "models/pose_landmarker_full.task"


def create_pose_landmarker():
    base_options = python.BaseOptions(
        model_asset_path=MODEL_PATH
    )

    options = vision.PoseLandmarkerOptions(
        base_options=base_options,
        running_mode=vision.RunningMode.VIDEO,
        num_poses=1
    )

    return vision.PoseLandmarker.create_from_options(options)


def process_video(video_path):
    landmarker = create_pose_landmarker()

    cap = cv2.VideoCapture(video_path)

    if not cap.isOpened():
        print("Error: Could not open video.")
        return

    fps = cap.get(cv2.CAP_PROP_FPS)

    if fps <= 0:
        fps = 30

    frame_index = 0

    while True:
        ret, frame = cap.read()

        if not ret:
            break

        # Convert OpenCV BGR image to RGB
        rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

        # Convert to MediaPipe Image
        mp_image = mp.Image(
            image_format=mp.ImageFormat.SRGB,
            data=rgb_frame
        )

        timestamp_ms = int((frame_index / fps) * 1000)

        # Run pose detection
        result = landmarker.detect_for_video(
            mp_image,
            timestamp_ms
        )

        # Draw detected landmarks
        if result.pose_landmarks:

            for pose_landmarks in result.pose_landmarks:

                for landmark in pose_landmarks:

                    x = int(landmark.x * frame.shape[1])
                    y = int(landmark.y * frame.shape[0])

                    cv2.circle(
                        frame,
                        (x, y),
                        4,
                        (0, 255, 0),
                        -1
                    )

        cv2.imshow("Virtual Sports Coach - Pose Detection", frame)

        if cv2.waitKey(1) & 0xFF == ord("q"):
            break

        frame_index += 1

    cap.release()
    landmarker.close()
    cv2.destroyAllWindows()


if __name__ == "__main__":

    video_path = input("Enter video path: ")

    process_video(video_path)