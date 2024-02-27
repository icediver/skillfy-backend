---
title: Skillfy API v1.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="skillfy-api">Skillfy API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Skillfy API description

Base URLs:

<h1 id="skillfy-api-auth">Auth</h1>

## AuthController_register

<a id="opIdAuthController_register"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/auth/register \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
POST /api/auth/register HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "name": "string",
  "email": "string",
  "password": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/auth/register',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```


`POST /api/auth/register`

*Register new user*

> Body parameter

```json
{
  "name": "string",
  "email": "string",
  "password": "string"
}
```

<h3 id="authcontroller_register-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AuthDto](#schemaauthdto)|true|none|

> Example responses

> 200 Response

```json
{
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "email@email.com",
    "isAdmin": false,
    "isEmailVerified": true,
    "avatarPath": "http://example.com/avatarPath"
  },
  "refreshToken": "refreshToken",
  "accessToken": "accessToken"
}
```

<h3 id="authcontroller_register-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[AuthEntity](#schemaauthentity)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|

<aside class="success">
This operation does not require authentication
</aside>

## AuthController_login

<a id="opIdAuthController_login"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/auth/login \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
POST /api/auth/login HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "name": "string",
  "email": "string",
  "password": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/auth/login',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```


`POST /api/auth/login`

*Login user*

> Body parameter

```json
{
  "name": "string",
  "email": "string",
  "password": "string"
}
```

<h3 id="authcontroller_login-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AuthDto](#schemaauthdto)|true|none|

> Example responses

> 200 Response

```json
{
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "email@email.com",
    "isAdmin": false,
    "isEmailVerified": true,
    "avatarPath": "http://example.com/avatarPath"
  },
  "refreshToken": "refreshToken",
  "accessToken": "accessToken"
}
```

<h3 id="authcontroller_login-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[AuthEntity](#schemaauthentity)|

<aside class="success">
This operation does not require authentication
</aside>

## AuthController_getNewTokens

<a id="opIdAuthController_getNewTokens"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/auth/login/access-token \
  -H 'Accept: application/json'

```

```http
POST /api/auth/login/access-token HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/auth/login/access-token',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```


`POST /api/auth/login/access-token`

*Get new access and refresh tokens*

> Example responses

> 200 Response

```json
{
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "email@email.com",
    "isAdmin": false,
    "isEmailVerified": true,
    "avatarPath": "http://example.com/avatarPath"
  },
  "refreshToken": "refreshToken",
  "accessToken": "accessToken"
}
```

<h3 id="authcontroller_getnewtokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[AuthEntity](#schemaauthentity)|

<aside class="success">
This operation does not require authentication
</aside>

## AuthController_logout

<a id="opIdAuthController_logout"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/auth/logout

```

```http
POST /api/auth/logout HTTP/1.1

```

```javascript

fetch('/api/auth/logout',
{
  method: 'POST'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```


`POST /api/auth/logout`

<h3 id="authcontroller_logout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## AuthController_confirmEmail

<a id="opIdAuthController_confirmEmail"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/auth/confirm?token=string

```

```http
POST /api/auth/confirm?token=string HTTP/1.1

```

```javascript

fetch('/api/auth/confirm?token=string',
{
  method: 'POST'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```


`POST /api/auth/confirm`

<h3 id="authcontroller_confirmemail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|none|

<h3 id="authcontroller_confirmemail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## AuthController_sendResetPasswordLink

<a id="opIdAuthController_sendResetPasswordLink"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/auth/reset-password-link?email=string

```

```http
GET /api/auth/reset-password-link?email=string HTTP/1.1

```

```javascript

fetch('/api/auth/reset-password-link?email=string',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```


`GET /api/auth/reset-password-link`

<h3 id="authcontroller_sendresetpasswordlink-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|true|none|

<h3 id="authcontroller_sendresetpasswordlink-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="skillfy-api-users">Users</h1>

## UserController_getProfile

<a id="opIdUserController_getProfile"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/users/profile \
  -H 'Accept: application/json'

```

```http
GET /api/users/profile HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/users/profile',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```


`GET /api/users/profile`

*Get profile*

> Example responses

> 200 Response

```json
{
  "id": 1,
  "createdAt": "2024-02-12T08:42:56.152Z",
  "updateAt": "2024-02-12T08:42:56.152Z",
  "email": "p6s7H@example.com",
  "password": "123456",
  "name": "John Doe",
  "avatarPath": "avatar.png",
  "isAdmin": "true",
  "isEmailVerified": "true"
}
```

<h3 id="usercontroller_getprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[UserEntity](#schemauserentity)|

<aside class="success">
This operation does not require authentication
</aside>

## UserController_updateProfile

<a id="opIdUserController_updateProfile"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /api/users/profile \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
PUT /api/users/profile HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "email": "p6s7H@example.com",
  "password": "123456",
  "name": "John",
  "avatarPath": "avatar.png",
  "isAdmin": "true",
  "isEmailVerified": "true"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/users/profile',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```


`PUT /api/users/profile`

*Update profile*

> Body parameter

```json
{
  "email": "p6s7H@example.com",
  "password": "123456",
  "name": "John",
  "avatarPath": "avatar.png",
  "isAdmin": "true",
  "isEmailVerified": "true"
}
```

<h3 id="usercontroller_updateprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UserDto](#schemauserdto)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 1,
  "createdAt": "2024-02-12T08:42:56.152Z",
  "updateAt": "2024-02-12T08:42:56.152Z",
  "email": "p6s7H@example.com",
  "password": "123456",
  "name": "John Doe",
  "avatarPath": "avatar.png",
  "isAdmin": "true",
  "isEmailVerified": "true"
}
```

<h3 id="usercontroller_updateprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[UserEntity](#schemauserentity)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="skillfy-api-media">Media</h1>

## MediaController_uploadsMediaFile

<a id="opIdMediaController_uploadsMediaFile"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/media?folder=string \
  -H 'Accept: application/json'

```

```http
POST /api/media?folder=string HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/media?folder=string',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```


`POST /api/media`

*Upload media*

<h3 id="mediacontroller_uploadsmediafile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|folder|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "url": "https://example.com/image.png",
  "name": "image.png"
}
```

<h3 id="mediacontroller_uploadsmediafile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[MediaResponse](#schemamediaresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="skillfy-api-categories">Categories</h1>

## CategoryController_getAll

<a id="opIdCategoryController_getAll"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/categories \
  -H 'Accept: application/json'

```

```http
GET /api/categories HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/categories',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```


`GET /api/categories`

*Get all categories*

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "createdAt": "2019-08-24T14:15:22Z",
    "updateAt": "2019-08-24T14:15:22Z",
    "name": "string",
    "slug": "string",
    "description": "string",
    "colors": [
      "string"
    ],
    "icon": "string"
  }
]
```

<h3 id="categorycontroller_getall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

<h3 id="categorycontroller_getall-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CategoryEntity](#schemacategoryentity)]|false|none|none|
|» id|number|true|none|none|
|» createdAt|string(date-time)|true|none|none|
|» updateAt|string(date-time)|true|none|none|
|» name|string|true|none|none|
|» slug|string|true|none|none|
|» description|string|true|none|none|
|» colors|[string]|true|none|none|
|» icon|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## CategoryController_create

<a id="opIdCategoryController_create"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/categories \
  -H 'Accept: application/json'

```

```http
POST /api/categories HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/categories',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```


`POST /api/categories`

*Create category*

> Example responses

> 200 Response

```json
{
  "id": 0,
  "createdAt": "2019-08-24T14:15:22Z",
  "updateAt": "2019-08-24T14:15:22Z",
  "name": "string",
  "slug": "string",
  "description": "string",
  "colors": [
    "string"
  ],
  "icon": "string"
}
```

<h3 id="categorycontroller_create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[CategoryEntity](#schemacategoryentity)|

<aside class="success">
This operation does not require authentication
</aside>

## CategoryController_getBySlug

<a id="opIdCategoryController_getBySlug"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/categories/by-slug/{slug} \
  -H 'Accept: application/json'

```

```http
GET /api/categories/by-slug/{slug} HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/categories/by-slug/{slug}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```


`GET /api/categories/by-slug/{slug}`

*Get category by slug*

<h3 id="categorycontroller_getbyslug-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "createdAt": "2019-08-24T14:15:22Z",
  "updateAt": "2019-08-24T14:15:22Z",
  "name": "string",
  "slug": "string",
  "description": "string",
  "colors": [
    "string"
  ],
  "icon": "string"
}
```

<h3 id="categorycontroller_getbyslug-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[CategoryEntity](#schemacategoryentity)|

<aside class="success">
This operation does not require authentication
</aside>

## CategoryController_getById

<a id="opIdCategoryController_getById"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/categories/{id} \
  -H 'Accept: application/json'

```

```http
GET /api/categories/{id} HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/categories/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```


`GET /api/categories/{id}`

*Get category by slug*

<h3 id="categorycontroller_getbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "createdAt": "2019-08-24T14:15:22Z",
  "updateAt": "2019-08-24T14:15:22Z",
  "name": "string",
  "slug": "string",
  "description": "string",
  "colors": [
    "string"
  ],
  "icon": "string"
}
```

<h3 id="categorycontroller_getbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[CategoryEntity](#schemacategoryentity)|

<aside class="success">
This operation does not require authentication
</aside>

## CategoryController_update

<a id="opIdCategoryController_update"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /api/categories/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
PUT /api/categories/{id} HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "name": "string",
  "description": "string",
  "icon": "string",
  "colors": [
    "string"
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/categories/{id}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```


`PUT /api/categories/{id}`

*Update category*

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "icon": "string",
  "colors": [
    "string"
  ]
}
```

<h3 id="categorycontroller_update-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[UpdateCategoryDto](#schemaupdatecategorydto)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "createdAt": "2019-08-24T14:15:22Z",
  "updateAt": "2019-08-24T14:15:22Z",
  "name": "string",
  "slug": "string",
  "description": "string",
  "colors": [
    "string"
  ],
  "icon": "string"
}
```

<h3 id="categorycontroller_update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[CategoryEntity](#schemacategoryentity)|

<aside class="success">
This operation does not require authentication
</aside>

## CategoryController_delete

<a id="opIdCategoryController_delete"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /api/categories/{id} \
  -H 'Accept: application/json'

```

```http
DELETE /api/categories/{id} HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/categories/{id}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```


`DELETE /api/categories/{id}`

*Delete category*

<h3 id="categorycontroller_delete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="categorycontroller_delete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|string|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="skillfy-api-courses">Courses</h1>

## CourseController_getAll

<a id="opIdCourseController_getAll"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/courses

```

```http
GET /api/courses HTTP/1.1

```

```javascript

fetch('/api/courses',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```


`GET /api/courses`

<h3 id="coursecontroller_getall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## CourseController_createCourse

<a id="opIdCourseController_createCourse"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/courses

```

```http
POST /api/courses HTTP/1.1

```

```javascript

fetch('/api/courses',
{
  method: 'POST'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```


`POST /api/courses`

<h3 id="coursecontroller_createcourse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## CourseController_getCourse

<a id="opIdCourseController_getCourse"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/courses/{id}

```

```http
GET /api/courses/{id} HTTP/1.1

```

```javascript

fetch('/api/courses/{id}',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```


`GET /api/courses/{id}`

<h3 id="coursecontroller_getcourse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="coursecontroller_getcourse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## CourseController_updateCourse

<a id="opIdCourseController_updateCourse"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /api/courses/{id} \
  -H 'Content-Type: application/json'

```

```http
PUT /api/courses/{id} HTTP/1.1

Content-Type: application/json

```

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/api/courses/{id}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```


`PUT /api/courses/{id}`

> Body parameter

```json
{}
```

<h3 id="coursecontroller_updatecourse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[CourseDto](#schemacoursedto)|true|none|

<h3 id="coursecontroller_updatecourse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## CourseController_deleteCourse

<a id="opIdCourseController_deleteCourse"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /api/courses/{id}

```

```http
DELETE /api/courses/{id} HTTP/1.1

```

```javascript

fetch('/api/courses/{id}',
{
  method: 'DELETE'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```


`DELETE /api/courses/{id}`

<h3 id="coursecontroller_deletecourse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="coursecontroller_deletecourse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## CourseController_getSimilar

<a id="opIdCourseController_getSimilar"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/courses/similar/{id}

```

```http
GET /api/courses/similar/{id} HTTP/1.1

```

```javascript

fetch('/api/courses/similar/{id}',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```


`GET /api/courses/similar/{id}`

<h3 id="coursecontroller_getsimilar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="coursecontroller_getsimilar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## CourseController_getCourseBySlug

<a id="opIdCourseController_getCourseBySlug"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/courses/by-slug/{slug}

```

```http
GET /api/courses/by-slug/{slug} HTTP/1.1

```

```javascript

fetch('/api/courses/by-slug/{slug}',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```


`GET /api/courses/by-slug/{slug}`

<h3 id="coursecontroller_getcoursebyslug-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|none|

<h3 id="coursecontroller_getcoursebyslug-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## CourseController_getCourseByCategory

<a id="opIdCourseController_getCourseByCategory"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/courses/by-category/{categorySlug}

```

```http
GET /api/courses/by-category/{categorySlug} HTTP/1.1

```

```javascript

fetch('/api/courses/by-category/{categorySlug}',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```


`GET /api/courses/by-category/{categorySlug}`

<h3 id="coursecontroller_getcoursebycategory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|categorySlug|path|string|true|none|

<h3 id="coursecontroller_getcoursebycategory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## CourseController_updateViews

<a id="opIdCourseController_updateViews"></a>

> Code samples

```shell
# You can also use wget
curl -X PATCH /api/courses/update-views/{id}

```

```http
PATCH /api/courses/update-views/{id} HTTP/1.1

```

```javascript

fetch('/api/courses/update-views/{id}',
{
  method: 'PATCH'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```


`PATCH /api/courses/update-views/{id}`

<h3 id="coursecontroller_updateviews-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="coursecontroller_updateviews-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="skillfy-api-videos">Videos</h1>

## VideoController_create

<a id="opIdVideoController_create"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/videos

```

```http
POST /api/videos HTTP/1.1

```

```javascript

fetch('/api/videos',
{
  method: 'POST'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```


`POST /api/videos`

<h3 id="videocontroller_create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## VideoController_findAll

<a id="opIdVideoController_findAll"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/videos

```

```http
GET /api/videos HTTP/1.1

```

```javascript

fetch('/api/videos',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```


`GET /api/videos`

<h3 id="videocontroller_findall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## VideoController_findOne

<a id="opIdVideoController_findOne"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/videos/{id}

```

```http
GET /api/videos/{id} HTTP/1.1

```

```javascript

fetch('/api/videos/{id}',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```


`GET /api/videos/{id}`

<h3 id="videocontroller_findone-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="videocontroller_findone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## VideoController_update

<a id="opIdVideoController_update"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /api/videos/{id} \
  -H 'Content-Type: application/json'

```

```http
PUT /api/videos/{id} HTTP/1.1

Content-Type: application/json

```

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/api/videos/{id}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```


`PUT /api/videos/{id}`

> Body parameter

```json
{}
```

<h3 id="videocontroller_update-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[UpdateVideoDto](#schemaupdatevideodto)|true|none|

<h3 id="videocontroller_update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## VideoController_remove

<a id="opIdVideoController_remove"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /api/videos/{id}

```

```http
DELETE /api/videos/{id} HTTP/1.1

```

```javascript

fetch('/api/videos/{id}',
{
  method: 'DELETE'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```


`DELETE /api/videos/{id}`

<h3 id="videocontroller_remove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="videocontroller_remove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## VideoController_findByCourse

<a id="opIdVideoController_findByCourse"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/videos/course/{slug}

```

```http
GET /api/videos/course/{slug} HTTP/1.1

```

```javascript

fetch('/api/videos/course/{slug}',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```


`GET /api/videos/course/{slug}`

<h3 id="videocontroller_findbycourse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|none|

<h3 id="videocontroller_findbycourse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## VideoController_findBySlug

<a id="opIdVideoController_findBySlug"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/videos/by-slug/{slug}

```

```http
GET /api/videos/by-slug/{slug} HTTP/1.1

```

```javascript

fetch('/api/videos/by-slug/{slug}',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```


`GET /api/videos/by-slug/{slug}`

<h3 id="videocontroller_findbyslug-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|none|

<h3 id="videocontroller_findbyslug-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="skillfy-api-reviews">Reviews</h1>

## ReviewController_getAll

<a id="opIdReviewController_getAll"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/reviews \
  -H 'Accept: application/json'

```

```http
GET /api/reviews HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/reviews',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```


`GET /api/reviews`

*Get all reviews*

> Example responses

> 200 Response

```json
[
  {
    "createdAt": "2022-01-01T00:00:00.000Z",
    "updateAt": "2022-01-01T00:00:00.000Z",
    "text": "text",
    "id": 1,
    "title": "title",
    "description": "description",
    "rating": 5,
    "userId": 1,
    "courseId": 1
  }
]
```

<h3 id="reviewcontroller_getall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

<h3 id="reviewcontroller_getall-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ReviewEntity](#schemareviewentity)]|false|none|none|
|» createdAt|string(date-time)|true|none|Date of creation|
|» updateAt|string(date-time)|true|none|Date of update|
|» text|string|true|none|Review text|
|» id|number|true|none|Review rating|
|» title|string|true|none|Review title|
|» description|string|true|none|Review description|
|» rating|number|true|none|Review rating|
|» userId|number|true|none|User id|
|» courseId|number|true|none|Course id|

<aside class="success">
This operation does not require authentication
</aside>

## ReviewController_getByApartment

<a id="opIdReviewController_getByApartment"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/reviews/by-course/{courseId} \
  -H 'Accept: application/json'

```

```http
GET /api/reviews/by-course/{courseId} HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/reviews/by-course/{courseId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```


`GET /api/reviews/by-course/{courseId}`

*Get reviews by course*

<h3 id="reviewcontroller_getbyapartment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|courseId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "createdAt": "2022-01-01T00:00:00.000Z",
  "updateAt": "2022-01-01T00:00:00.000Z",
  "text": "text",
  "id": 1,
  "title": "title",
  "description": "description",
  "rating": 5,
  "userId": 1,
  "courseId": 1
}
```

<h3 id="reviewcontroller_getbyapartment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ReviewEntity](#schemareviewentity)|

<aside class="success">
This operation does not require authentication
</aside>

## ReviewController_leaveReview

<a id="opIdReviewController_leaveReview"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/reviews/leave/{courseId} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
POST /api/reviews/leave/{courseId} HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "rating": 5,
  "text": "text"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/reviews/leave/{courseId}',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```


`POST /api/reviews/leave/{courseId}`

*Create review*

> Body parameter

```json
{
  "rating": 5,
  "text": "text"
}
```

<h3 id="reviewcontroller_leavereview-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|courseId|path|string|true|none|
|body|body|[ReviewDto](#schemareviewdto)|true|none|

> Example responses

> 200 Response

```json
{
  "rating": 5,
  "text": "text"
}
```

<h3 id="reviewcontroller_leavereview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ReviewDto](#schemareviewdto)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AuthDto">AuthDto</h2>
<!-- backwards compatibility -->
<a id="schemaauthdto"></a>
<a id="schema_AuthDto"></a>
<a id="tocSauthdto"></a>
<a id="tocsauthdto"></a>

```json
{
  "name": "string",
  "email": "string",
  "password": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|User name|
|email|string|true|none|User email|
|password|string|true|none|User password|

<h2 id="tocS_AuthEntity">AuthEntity</h2>
<!-- backwards compatibility -->
<a id="schemaauthentity"></a>
<a id="schema_AuthEntity"></a>
<a id="tocSauthentity"></a>
<a id="tocsauthentity"></a>

```json
{
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "email@email.com",
    "isAdmin": false,
    "isEmailVerified": true,
    "avatarPath": "http://example.com/avatarPath"
  },
  "refreshToken": "refreshToken",
  "accessToken": "accessToken"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user|object|true|none|User|
|refreshToken|string|true|none|Refresh token|
|accessToken|string|true|none|Access token|

<h2 id="tocS_UserEntity">UserEntity</h2>
<!-- backwards compatibility -->
<a id="schemauserentity"></a>
<a id="schema_UserEntity"></a>
<a id="tocSuserentity"></a>
<a id="tocsuserentity"></a>

```json
{
  "id": 1,
  "createdAt": "2024-02-12T08:42:56.152Z",
  "updateAt": "2024-02-12T08:42:56.152Z",
  "email": "p6s7H@example.com",
  "password": "123456",
  "name": "John Doe",
  "avatarPath": "avatar.png",
  "isAdmin": "true",
  "isEmailVerified": "true"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|true|none|User id|
|createdAt|string(date-time)|true|none|User creation date|
|updateAt|string(date-time)|true|none|User update date|
|email|string|true|none|User email|
|password|string|true|none|User password|
|name|string|true|none|User name|
|avatarPath|string|true|none|User avatar path|
|isAdmin|boolean|true|none|Is User admin?|
|isEmailVerified|boolean|true|none|Is User email verified?|

<h2 id="tocS_UserDto">UserDto</h2>
<!-- backwards compatibility -->
<a id="schemauserdto"></a>
<a id="schema_UserDto"></a>
<a id="tocSuserdto"></a>
<a id="tocsuserdto"></a>

```json
{
  "email": "p6s7H@example.com",
  "password": "123456",
  "name": "John",
  "avatarPath": "avatar.png",
  "isAdmin": "true",
  "isEmailVerified": "true"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|User email|
|password|string|false|none|User password|
|name|string|false|none|User name|
|avatarPath|string|false|none|User avatar path|
|isAdmin|boolean|false|none|Is User admin?|
|isEmailVerified|boolean|false|none|Is User email verified?|

<h2 id="tocS_MediaResponse">MediaResponse</h2>
<!-- backwards compatibility -->
<a id="schemamediaresponse"></a>
<a id="schema_MediaResponse"></a>
<a id="tocSmediaresponse"></a>
<a id="tocsmediaresponse"></a>

```json
{
  "url": "https://example.com/image.png",
  "name": "image.png"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_CategoryEntity">CategoryEntity</h2>
<!-- backwards compatibility -->
<a id="schemacategoryentity"></a>
<a id="schema_CategoryEntity"></a>
<a id="tocScategoryentity"></a>
<a id="tocscategoryentity"></a>

```json
{
  "id": 0,
  "createdAt": "2019-08-24T14:15:22Z",
  "updateAt": "2019-08-24T14:15:22Z",
  "name": "string",
  "slug": "string",
  "description": "string",
  "colors": [
    "string"
  ],
  "icon": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|true|none|none|
|createdAt|string(date-time)|true|none|none|
|updateAt|string(date-time)|true|none|none|
|name|string|true|none|none|
|slug|string|true|none|none|
|description|string|true|none|none|
|colors|[string]|true|none|none|
|icon|string|true|none|none|

<h2 id="tocS_UpdateCategoryDto">UpdateCategoryDto</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecategorydto"></a>
<a id="schema_UpdateCategoryDto"></a>
<a id="tocSupdatecategorydto"></a>
<a id="tocsupdatecategorydto"></a>

```json
{
  "name": "string",
  "description": "string",
  "icon": "string",
  "colors": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string¦null|true|none|Category name|
|description|string¦null|true|none|Category description|
|icon|string¦null|true|none|Category icon|
|colors|[string]¦null|true|none|Category colors|

<h2 id="tocS_CourseDto">CourseDto</h2>
<!-- backwards compatibility -->
<a id="schemacoursedto"></a>
<a id="schema_CourseDto"></a>
<a id="tocScoursedto"></a>
<a id="tocscoursedto"></a>

```json
{}

```

### Properties

*None*

<h2 id="tocS_UpdateVideoDto">UpdateVideoDto</h2>
<!-- backwards compatibility -->
<a id="schemaupdatevideodto"></a>
<a id="schema_UpdateVideoDto"></a>
<a id="tocSupdatevideodto"></a>
<a id="tocsupdatevideodto"></a>

```json
{}

```

### Properties

*None*

<h2 id="tocS_ReviewEntity">ReviewEntity</h2>
<!-- backwards compatibility -->
<a id="schemareviewentity"></a>
<a id="schema_ReviewEntity"></a>
<a id="tocSreviewentity"></a>
<a id="tocsreviewentity"></a>

```json
{
  "createdAt": "2022-01-01T00:00:00.000Z",
  "updateAt": "2022-01-01T00:00:00.000Z",
  "text": "text",
  "id": 1,
  "title": "title",
  "description": "description",
  "rating": 5,
  "userId": 1,
  "courseId": 1
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|Date of creation|
|updateAt|string(date-time)|true|none|Date of update|
|text|string|true|none|Review text|
|id|number|true|none|Review rating|
|title|string|true|none|Review title|
|description|string|true|none|Review description|
|rating|number|true|none|Review rating|
|userId|number|true|none|User id|
|courseId|number|true|none|Course id|

<h2 id="tocS_ReviewDto">ReviewDto</h2>
<!-- backwards compatibility -->
<a id="schemareviewdto"></a>
<a id="schema_ReviewDto"></a>
<a id="tocSreviewdto"></a>
<a id="tocsreviewdto"></a>

```json
{
  "rating": 5,
  "text": "text"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rating|number|true|none|Review rating|
|text|string|true|none|Review text|
