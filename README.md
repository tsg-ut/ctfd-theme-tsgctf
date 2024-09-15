# ctfd-theme-4t$ctf

Custom CTFd theme made for 4T$ CTF

![](https://i.imgur.com/mXFHBrf.png)

## Setup

```
cd /path/to/CTFd
git clone <URL> themes/4t$ctf -b dist
```

## Related projects

* [i](https://github.com/4T-24/CTFd-Instancier-Plugin)

## Development

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
# when you use this please serve patched CTFd server as below at localhost:8000
$ npm run dev

# build the theme into 4t$ctf directory
$ npm run build

# build static website
$ SESSION=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx npm run generate
```

Following patch is required during development (don't do this in production):

```patch
diff --git a/CTFd/api/v1/users.py b/CTFd/api/v1/users.py
index bd1d2ca9..3bbf28c0 100644
--- a/CTFd/api/v1/users.py
+++ b/CTFd/api/v1/users.py
@@ -125,16 +125,17 @@ class UserList(Resource):
                     "prev": users.prev_num,
                     "pages": users.pages,
                     "per_page": users.per_page,
                     "total": users.total,
                 }
             },
             "success": True,
             "data": response.data,
+            "nonce": session.get("nonce"),
         }
 
     @admins_only
     @users_namespace.doc(
         description="Endpoint to create a User object",
         responses={
             200: ("Success", "UserDetailedSuccessResponse"),
             400: (
```
