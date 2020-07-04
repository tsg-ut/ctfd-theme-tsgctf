# ctfd-theme-tsgctf

Custom CTFd theme made for TSG CTF

![](https://i.imgur.com/mXFHBrf.png)

## Setup

```
cd /path/to/CTFd
git clone https://github.com/tsg-ut/ctfd-theme-tsgctf.git themes/tsgctf -b dist
```

## Related projects

* [ctfd-plugin-tsgctf](https://github.com/tsg-ut/ctfd-plugin-tsgctf)

## Development

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
# when you use this please serve patched CTFd server as below at localhost:8000
$ npm run dev

# build the theme into tsgctf directory
$ npm run build

# build static website
$ SESSION=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx npm run generate
```

Following patch is required during development (don't do this in production):

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
