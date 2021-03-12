## User Sign Up

**URL** : `api/v1/user`

**Method** : `POST`

**Header** : None 

**Auth required** : None

**Permissions required** : None

## Request Body

```json
{ 
    "email": " admin@gmail.com ", 
    "password": "*********" (length 8 to 20)
} 
```

## Success Response

**Code** : `201`

**Response**

```json
{
    "status": "success",
    "code": 201,
    "data": {
        "id": "604b00d6998407372c84a912",
        "email": "admin@gmail.com",
        "created_at": 1615528150,
        "updated_at": 1615528150
    }
}
```

## Error Response 

**Code** : `400`

**Response**

```json
{ 
    "status": "failed", 
    "code": 400, 
    "errors": [ 
        { 
            "type": "FIELD_DUPLICATE", 
            "parameter": "email", 
            "message": "The value of the field is already used for another resource." 
        } 
    ]
}
```

## User Sign In

**URL** : `api/v1/user/login`

**Method** : `POST`

**Header** : None 

**Auth required** : None

**Permissions required** : None

## Request Body

```json
{ 
    "email": "admin@gmail.com", 
    "password": "*********"  
}  
```

## Success Response

**Code** : `201` //201 as new session created

**Response**

```json
{
    "status": "success",
    "code": 201,
    "data": {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTYxNTUzMTc0MywiZXhwIjoxNjE1NTM1MzQzfQ.gZtBEScsCb40KceeL_LTOfsxWZT-tQ-m112n8xDML5U",
        "email": "admin@gmail.com",
        "user_id": "604a65f1b187e22508e2caa3",
        "expires_in": "3600"
    }
}
```

## Error Response 

**Code** : `401`

**Response**

```json
{ 
    "status": "failed", 
    "code": 401, 
    "errors": [ 
        { 
            "type": " AUTHENTICATION_FAILED ", 
            "message": " Used authentication credentials are invalid." 
        } 
    ]
}
```

## User Update

**URL** : `api/v1/user/:user_id`

**Method** : `PUT`

**Header** : x-access-token : <access_token> 

**Auth required** : Yes

**Permissions required** : None

## Request Body

```json
{
	"first_name" : "Admin",
	"last_name" : "ThinkWik" 
    //can also pass dob and gender
    //no validation on it currently
}  
```

## Success Response

**Code** : `200`

**Response**

```json
{
    "status": "success",
    "code": 200,
    "data": {
        "id": "604a65f1b187e22508e2caa3",
        "email": "admin@gmail.com",
        "first_name": "Admin",
        "last_name": "ThinkWik",
        "created_at": 1615488497,
        "updated_at": 1615495768
    }
}
```

## Error Response 

**Code** : `401`

**Response**

```json
{ 
    "status": "failed", 
    "code": 401, 
    "errors": [ 
        { 
            "type"   : "AUTHENTICATION_REQUIRED",
            "message"  : "You need authorization to perform this action."
        } 
    ]
}
```