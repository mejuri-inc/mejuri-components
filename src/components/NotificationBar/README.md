Notification Bar Hide mobile
```jsx

const legend = ["This is a text for a mejuri notification Bar"]
const notificationBar = {
  backgroundColor: "#000",
  collapsed: true,
  legend: legend,
  textColor: "#fff"
}


return (
  <NotificationBar
    backgroundColor={notificationBar.backgroundColor}
    color={notificationBar.textColor}
    collapsed = {notificationBar.collapsed}
    legend = {notificationBar.legend}
    />
)

```
Notification Bar Hide mobile
```jsx

const legend = ["This is a text for a mejuri notification Bar"]
const notificationBar = {
  backgroundColor: "#000",
  collapsed: false,
  legend: legend,
  textColor: "#fff"
}


return (
  <NotificationBar
    backgroundColor={notificationBar.backgroundColor}
    color={notificationBar.textColor}
    collapsed = {notificationBar.collapsed}
    legend = {notificationBar.legend}
    />
)
