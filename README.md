# ctfd-theme-tsgctf

> Custom CTFd theme made for TSG CTF

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
# when you use this please serve patched CTFd server as below at localhost:8000
$ npm run dev

# build the theme into tsgctf directory
$ npm run build
```

```patch
diff --git a/CTFd/api/v1/users.py b/CTFd/api/v1/users.py
index 9317209..a52bdda 100644
--- a/CTFd/api/v1/users.py
+++ b/CTFd/api/v1/users.py
@@ -41,7 +41,8 @@ class UserList(Resource):

         return {
             'success': True,
-            'data': response.data
+            'data': response.data,
+            'nonce': session.get('nonce')
         }

     @users_namespace.doc(params={'notify': 'Whether to send the created user an email with their credentials'})
```
