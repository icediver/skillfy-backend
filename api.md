## 1. Skillfy API
The Skillfy API description

## 2. 接口列表
### 2.1 /api/auth/register
* 接口：POST /api/auth/register
* 说明：待补充
* 参数：
  - name: string, User name
  - email: string, 必选, User email
  - password: string, 必选, User password

### 2.2 /api/auth/login
* 接口：POST /api/auth/login
* 说明：待补充
* 参数：
  - name: string, User name
  - email: string, 必选, User email
  - password: string, 必选, User password

### 2.3 /api/auth/login/access-token
* 接口：POST /api/auth/login/access-token
* 说明：待补充

### 2.4 /api/auth/logout
* 接口：POST /api/auth/logout
* 说明：待补充

### 2.5 /api/auth/confirm
* 接口：POST /api/auth/confirm
* 说明：待补充

### 2.6 /api/auth/reset-password-link
* 接口：GET /api/auth/reset-password-link
* 说明：待补充
* 参数：
  - email: string, 必选, 待补充

### 2.7 /api/users/profile
* 接口：GET /api/users/profile
* 说明：待补充

### 2.7 /api/users/profile
* 接口：PUT /api/users/profile
* 说明：待补充
* 参数：
  - email: string, User email
  - password: string, User password
  - name: string, User name
  - avatarPath: string, User avatar path
  - isAdmin: boolean, Is User admin?
  - isEmailVerified: boolean, Is User email verified?

### 2.8 /api/media
* 接口：POST /api/media
* 说明：待补充

### 2.9 /api/categories
* 接口：POST /api/categories
* 说明：待补充

### 2.9 /api/categories
* 接口：GET /api/categories
* 说明：待补充

### 2.10 /api/categories/by-slug/{slug}
* 接口：GET /api/categories/by-slug/{slug}
* 说明：待补充
* 参数：
  - slug: string, 必选, 待补充

### 2.11 /api/categories/{id}
* 接口：GET /api/categories/{id}
* 说明：待补充
* 参数：
  - id: string, 必选, 待补充

### 2.11 /api/categories/{id}
* 接口：PUT /api/categories/{id}
* 说明：待补充
* 参数：
  - name: string, 必选, Category name
  - description: string, 必选, Category description
  - icon: string, 必选, Category icon
  - colors: array, 必选, Category colors

### 2.11 /api/categories/{id}
* 接口：DELETE /api/categories/{id}
* 说明：待补充

### 2.12 /api/courses
* 接口：POST /api/courses
* 说明：待补充

### 2.12 /api/courses
* 接口：GET /api/courses
* 说明：待补充

### 2.13 /api/courses/{id}
* 接口：GET /api/courses/{id}
* 说明：待补充
* 参数：
  - id: string, 必选, 待补充

### 2.13 /api/courses/{id}
* 接口：PUT /api/courses/{id}
* 说明：待补充
* 参数：


### 2.13 /api/courses/{id}
* 接口：DELETE /api/courses/{id}
* 说明：待补充

### 2.14 /api/courses/similar/{id}
* 接口：GET /api/courses/similar/{id}
* 说明：待补充
* 参数：
  - id: string, 必选, 待补充

### 2.15 /api/courses/by-slug/{slug}
* 接口：GET /api/courses/by-slug/{slug}
* 说明：待补充
* 参数：
  - slug: string, 必选, 待补充

### 2.16 /api/courses/by-category/{categorySlug}
* 接口：GET /api/courses/by-category/{categorySlug}
* 说明：待补充
* 参数：
  - categorySlug: string, 必选, 待补充

### 2.18 /api/videos
* 接口：POST /api/videos
* 说明：待补充

### 2.18 /api/videos
* 接口：GET /api/videos
* 说明：待补充

### 2.19 /api/videos/{id}
* 接口：GET /api/videos/{id}
* 说明：待补充
* 参数：
  - id: string, 必选, 待补充

### 2.19 /api/videos/{id}
* 接口：PUT /api/videos/{id}
* 说明：待补充
* 参数：


### 2.19 /api/videos/{id}
* 接口：DELETE /api/videos/{id}
* 说明：待补充

### 2.20 /api/videos/course/{slug}
* 接口：GET /api/videos/course/{slug}
* 说明：待补充
* 参数：
  - slug: string, 必选, 待补充

### 2.21 /api/videos/by-slug/{slug}
* 接口：GET /api/videos/by-slug/{slug}
* 说明：待补充
* 参数：
  - slug: string, 必选, 待补充

### 2.22 /api/reviews
* 接口：GET /api/reviews
* 说明：待补充

### 2.23 /api/reviews/by-course/{courseId}
* 接口：GET /api/reviews/by-course/{courseId}
* 说明：待补充
* 参数：
  - courseId: string, 必选, 待补充

### 2.24 /api/reviews/leave/{courseId}
* 接口：POST /api/reviews/leave/{courseId}
* 说明：待补充
* 参数：
  - rating: number, 必选, Review rating
  - text: string, 必选, Review text