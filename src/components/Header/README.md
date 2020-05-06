Mobile Header:
```jsx
const user = { "isGuest" : false, "nameOrEmail" : "joa"};
return (
  <Header 
    isDesktop={() => false}
    cartItemsCount={10}
    user={user}
    />
  )

```

Desktop Header
```jsx
const user = { "isGuest" : false, "nameOrEmail" : "joa"};
return (
  <Header 
    isDesktop={() => true}
    cartItemsCount={10}
    user={user}
    />
  )

```