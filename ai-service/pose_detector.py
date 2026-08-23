import cv2
import mediapipe as mp

print("🤖 Virtual Sports Coach - Pose Detector")

# Initialize MediaPipe Pose
mp_pose = mp.solutions.pose
mp_drawing = mp.solutions.drawing_utils

pose = mp_pose.Pose(
    static_image_mode=False,
    model_complexity=1,
    enable_segmentation=False,
    min_detection_confidence=0.5,
    min_tracking_confidence=0.5
)

video_path = input("Enter the path to your video: ")

cap = cv2.VideoCapture(video_path)

if not cap.isOpened():
    print("❌ Could not open video.")
    pose.close()
    exit()

print("✅ Video opened successfully.")
print("🤖 Starting pose detection...")
print("Press Q in the video window to stop.")

while True:
    ret, frame = cap.read()

    if not ret:
        break

    # OpenCV uses BGR, MediaPipe expects RGB
    rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

    # Detect the person's pose
    results = pose.process(rgb_frame)

    # Draw the detected skeleton
    if results.pose_landmarks:
        mp_drawing.draw_landmarks(
            frame,
            results.pose_landmarks,
            mp_pose.POSE_CONNECTIONS
        )

    cv2.imshow(
        "Virtual Sports Coach - Pose Detection",
        frame
    )

    # Press Q to quit
    if cv2.waitKey(1) & 0xFF == ord("q"):
        break

cap.release()
cv2.destroyAllWindows()
pose.close()

print("✅ Pose detection finished.")