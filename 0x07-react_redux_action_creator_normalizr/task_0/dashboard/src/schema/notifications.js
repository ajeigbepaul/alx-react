// Import the JSON data from notifications.json
import * as notificationData from "../notifications.json";

// Create a function to get all notifications by user
export function getAllNotificationsByUser(userId) {
  const userNotifications = [];

  for (const notification of notificationData.default) {
    if (notification.author.id === userId) {
      userNotifications.push(notification.context);
    }
  }

  return userNotifications;
}
