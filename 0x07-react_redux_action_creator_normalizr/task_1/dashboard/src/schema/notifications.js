import { schema } from "normalizr";

// Define user entity
const user = new schema.Entity("users");

// Define message entity
const message = new schema.Entity(
  "messages",
  {},
  {
    idAttribute: "guid",
  }
);

// Define notification entity
const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});
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
export { user, message, notification };

