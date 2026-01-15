1:"$Sreact.fragment"
2:I[27423,["/_next/static/chunks/d0c46da226ade5c3.js"],"ThemeProvider"]
3:I[25220,["/_next/static/chunks/d0c46da226ade5c3.js"],"default"]
4:I[39756,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/7340adf74ff47ec0.js"],"default"]
5:I[37457,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/7340adf74ff47ec0.js"],"default"]
6:I[46383,["/_next/static/chunks/d0c46da226ade5c3.js","/_next/static/chunks/d7ec7c5dfc60fc23.js","/_next/static/chunks/ca9ee1af4b3943f3.js"],"default"]
7:I[25140,["/_next/static/chunks/d0c46da226ade5c3.js","/_next/static/chunks/d7ec7c5dfc60fc23.js","/_next/static/chunks/ca9ee1af4b3943f3.js"],"default"]
e:I[68027,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/7340adf74ff47ec0.js"],"default"]
:HL["/_next/static/chunks/1a128c1e3758e741.css","style"]
:HL["/_next/static/media/83afe278b6a6bb3c-s.p.3a6ba036.woff2","font",{"crossOrigin":"","type":"font/woff2"}]
8:T157d,
# Understanding localStorage, sessionStorage, and Cookies — and How We Built a “Remember Me” Feature

Modern web applications need to maintain state and session continuity to provide a seamless user experience. To manage this "auth state," browsers provide three main storage mechanisms: **localStorage**, **sessionStorage**, and **Cookies**.

In this article, we will decode these storage layers, explore how we built a "Remember Me" feature, and discuss interesting browser behaviors regarding session restoration.

## Browser Storage Fundamentals

### 1. localStorage 💾
**localStorage** is a mechanism for storing key-value pairs in a web browser with no expiration time.
- **Shared across all tabs**: Data stored in localStorage is accessible across all tabs and windows of the same origin.
- **Persists continuously**: The data persists even after the browser is closed and reopened. It stays until explicitly deleted.
- **Capacity**: Generally allows for 5-10 MB of data.
- **Client-side only**: Data is not sent to the server with every request.

```javascript
localStorage.setItem("remember_me", "true"); // Persists until cleared
```

### 2. sessionStorage ⏱️
**sessionStorage** allows you to access a storage area that's unique to a specific browser session.
- **Tab-scoped**: Data stays within the specific tab where it was created.
- **Cleared when tab closes**: The data is automatically cleared when the page session ends (i.e., when the tab is closed).
- **Survives reloads**: Data persists through page reloads and restores.

```javascript
sessionStorage.setItem("step", "2"); // Available for the duration of the page session
```

### 3. Cookies 🍪
**Cookies** are small blocks of data created by a web server while a user is browsing a website and placed on the user's computer or other device by the user's web browser.
- **Sent with requests**: Cookies are sent to the server with every HTTP request, making them useful for authentication.
- **Expiration**: Can be "Session" cookies (expire when the client shuts down) or "Persistent" cookies (expire at a specific date).
- **Security**: Can be configured with flags like `HttpOnly` (inaccessible to JavaScript), `Secure` (HTTPS only), and `SameSite` (CSRF protection).

```http
Set-Cookie: session_id=abc123; HttpOnly; Secure
```

---

## Designing the "Remember Me" Feature

We implemented a specific behavior for our authentication flow:
1.  **If "Remember Me" is checked** → The user stays logged in even after closing and reopening the browser.
2.  **If "Remember Me" is UNCHECKED** → The user is logged out when the browser is closed.

### The Implementation Strategy
We combined two mechanisms:
1.  A **Session Cookie** (no fixed expiry) — Serves as the active session identifier.
2.  A **remember_me** flag in `localStorage` — Indicates user intent for persistence.

#### Step 1: On Login
```javascript
localStorage.setItem("remember_me", "false"); // Stores user preference
document.cookie = "active_session=true; path=/"; // Sets the session cookie
```

#### Step 2: On App Initialization
```javascript
const rememberMe = localStorage.getItem("remember_me");
const hasSessionCookie = document.cookie.includes("active_session=true");

if (rememberMe !== "true" && !hasSessionCookie) {
  logoutUser(); // Clears session if specific criteria aren't met
}
```
*Logic*: If the user did not opt for "Remember Me" AND the session cookie is missing (indicating a fresh browser session), the application logs the user out.

#### Step 3: On Browser Close
Browsers typically clear *session cookies* when the application closes, handling the cleanup automatically.

---

## The Tab Restore Behavior (Cmd + Shift + T) 🔄

An interesting edge case arises with the "Restore Closed Tab" feature found in modern browsers.

If a user unchecks "Remember Me", closes the browser, and then uses **Cmd + Shift + T** (or Ctrl + Shift + T) to restore the tab, they will often find themselves still logged in.

### Why Does This Happen?
Modern browsers treat "Tab Restore" as a continuation of the previous session rather than a fresh start.
- **Session cookies** are restored.
- **Application state** is preserved.
- From the application's perspective, the session never actually ended.

### Is this a Bug?
**No, this is intended behavior.** 
GitLab and other major platforms document this: "Session restoration is considered a trusted continuity signal."

Forcing a logout in this scenario would disrupt the user experience, as the user explicitly requested to restore their previous state.

### Is it Acceptable?
**Yes.**
- **Security Check**: It typically occurs on the same device and browser instance.
- **Industry Standard**: It is standard behavior across most modern web applications.
- **Mental Model**: "Remember Me" controls persistence across fresh starts (cold opens), not session restorations.

---

## Key Takeaways

1.  **localStorage** offers persistent storage on the client side.
2.  **sessionStorage** is tied to the lifecycle of a specific tab.
3.  **Cookies** are essential for server-side communication and authentication.
4.  **"Remember Me"** implementations often rely on a combination of persistent flags and session cookies.
5.  **Tab Restore** restores the full state of the session, including session cookies, which is a deliberate browser feature.

Understanding these storage nuances helps in designing robust authentication flows and state management systems.

*Happy Coding!* 🚀
    0:{"P":null,"b":"33inneM2MHsrND2xwLbu3","c":["","blog"],"q":"","i":false,"f":[[["",{"children":["blog",{"children":["__PAGE__",{}]}]},"$undefined","$undefined",true],[["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/1a128c1e3758e741.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","script","script-0",{"src":"/_next/static/chunks/d0c46da226ade5c3.js","async":true,"nonce":"$undefined"}]],["$","html",null,{"lang":"en","suppressHydrationWarning":true,"children":["$","body",null,{"className":"inter_442cfc22-module__NxEuJG__className bg-primary text-white-100 overflow-x-hidden","children":["$","$L2",null,{"attribute":"class","defaultTheme":"dark","enableSystem":true,"disableTransitionOnChange":true,"children":["$","div",null,{"className":"relative z-0","children":[["$","div",null,{"className":"mesh-gradient"}],["$","$L3",null,{}],["$","$L4",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L5",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":404}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]]}]}]}]}]]}],{"children":[["$","$1","c",{"children":[null,["$","$L4",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L5",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":[["$","$1","c",{"children":[["$","div",null,{"className":"pt-20","children":["$","$L6",null,{"idName":"blogs","children":[["$","div",null,{"className":"flex flex-col","children":[["$","p",null,{"className":"sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider","children":"My thoughts"}],["$","h2",null,{"className":"text-white-100 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]","children":"Blog."}]]}],["$","p",null,{"className":"mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]","children":"A collection of technical deep-dives, explanations, and engineering insights."}],["$","div",null,{"className":"mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7","children":[["$","$L7","browser-storage-remember-me",{"index":0,"id":"browser-storage-remember-me","title":"Understanding localStorage, sessionStorage, and Cookies","subtitle":"A technical deep dive into browser storage mechanisms, how we built a 'Remember Me' feature, and understanding session restoration behavior.","author":"Sohan Paliyal","date":"Dec 30, 2024","tags":[{"name":"javascript","color":"blue-text-gradient"},{"name":"web-dev","color":"green-text-gradient"},{"name":"architecture","color":"pink-text-gradient"}],"image":{"src":"/_next/static/media/browser_storage.4fe0de13.png","width":1024,"height":1024,"blurWidth":8,"blurHeight":8,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDzo3Gl/wBmeV8+/HovX64r1b0+UwtLnv0P/9k="},"content":"$8"}],"$L9"]}]]}]}],["$La","$Lb"],"$Lc"]}],{},null,false,false]},null,false,false]},null,false,false],"$Ld",false]],"m":"$undefined","G":["$e",[]],"S":true}
10:I[97367,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/7340adf74ff47ec0.js"],"OutletBoundary"]
11:"$Sreact.suspense"
13:I[97367,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/7340adf74ff47ec0.js"],"ViewportBoundary"]
15:I[97367,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/7340adf74ff47ec0.js"],"MetadataBoundary"]
f:T99b,
# Event Bubbling: Why Parents Feel What Children Do

If you’ve ever clicked a button and wondered **“Why did the parent also react?”** — welcome to **Event Bubbling**.

## What is Event Bubbling? 🫧

Event bubbling means that when an event happens on a child element, it first runs on that element and then **“bubbles up”** to its parents, one by one.

Think of it like this:
👉 **You tap a glass on a table** → the glass feels it → the table feels it → the floor feels it.

## Simple Example (HTML + JS)

Consider this structure:

```html
<div id="parent">
  Parent
  <button id="child">Click me</button>
</div>
```

And this JavaScript:

```javascript
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});
```

### What happens when you click the button?

**Output:**
1. `Child clicked`
2. `Parent clicked`

**Why?**
Because the click starts at the **button** (child), then bubbles up to the **div** (parent).

---

## Real-Life Use Case: Why is this Useful? 🛠️

Imagine you have a list of 100 items. Instead of adding click listeners to **100 list items**, you can add just **one listener** to the parent `<ul>`.

```javascript
// Event Delegation
document.getElementById("list").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("Item clicked:", e.target.textContent);
  }
});
```

This pattern is called **Event Delegation**, and it works entirely because of bubbling.
✅ **Less code**
✅ **Better performance**
✅ **Easier maintenance**

---

## Stopping the Bubble 🛑

Sometimes you **don’t** want the event to go up. You can stop it!

```javascript
document.getElementById("child").addEventListener("click", (e) => {
  e.stopPropagation(); // <--- The magic line
  console.log("Only child clicked");
});
```

Now, if you click the child, the parent **won’t** react at all.

---

## Quick Summary

1.  **Event starts** at the target element.
2.  Then **moves upward** through parents.
3.  This behavior is called **Event Bubbling**.
4.  It is useful for **Event Delegation**.
5.  It can be stopped using `e.stopPropagation()`.

### Final Thought

Event bubbling isn’t magic — it’s just the browser trying to be helpful:
> *"Hey parent, your child just did something. Just letting you know."*

*Happy Coding!* 🚀
    9:["$","$L7","event-bubbling-explained",{"index":1,"id":"event-bubbling-explained","title":"Event Bubbling in JavaScript: Why Parents Feel What Children Do","subtitle":"If you’ve ever clicked a button and wondered 'why did the parent also react?' — welcome to event bubbling.","author":"Sohan Paliyal","date":"Jan 13, 2026","tags":[{"name":"javascript","color":"blue-text-gradient"},{"name":"web-dev","color":"green-text-gradient"},{"name":"concepts","color":"pink-text-gradient"}],"image":{"src":"/_next/static/media/event_bubbling.71778484.svg","width":800,"height":600,"blurWidth":0,"blurHeight":0},"content":"$f"}]
a:["$","script","script-0",{"src":"/_next/static/chunks/d7ec7c5dfc60fc23.js","async":true,"nonce":"$undefined"}]
b:["$","script","script-1",{"src":"/_next/static/chunks/ca9ee1af4b3943f3.js","async":true,"nonce":"$undefined"}]
c:["$","$L10",null,{"children":["$","$11",null,{"name":"Next.MetadataOutlet","children":"$@12"}]}]
d:["$","$1","h",{"children":[null,["$","$L13",null,{"children":"$L14"}],["$","div",null,{"hidden":true,"children":["$","$L15",null,{"children":["$","$11",null,{"name":"Next.Metadata","children":"$L16"}]}]}],["$","meta",null,{"name":"next-size-adjust","content":""}]]}]
14:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
12:null
16:[["$","title","0",{"children":"Blog | Sohan Paliyal"}],["$","meta","1",{"name":"description","content":"Technical articles on JavaScript, Web Development, and Performance Engineering."}],["$","meta","2",{"name":"keywords","content":"Software Engineer,React Developer,TypeScript,Performance Engineering,Portfolio"}]]
