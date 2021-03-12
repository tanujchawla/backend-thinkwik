## Create Event

**URL** : `api/v1/event`

**Method** : `POST`

**Header** : x-access-token : <access_token> 

**Auth required** : Yes

**Permissions required** : None

## Request Body

```json
{
	"title" : "Demo Event",
	"description" : "This is a demo event.",
	"date" : "15/03/2021",
	"time" : "0900",// 24 hour format
	"place" : "Delhi",
	"user_id" : "604a65f1b187e22508e2caa3",
	"participants" : [
		"604a65f1b187e22508e2caa3",
		"604b00cb998407372c84a911",
		"604b00d6998407372c84a912"
	],
	"max_participants" : 5
} 
```

## Success Response

**Code** : `200`

**Response**

```json
{
    "status": "success",
    "code": 201,
    "data": {
        "id": "604b116a93ad714ed0c64e78",
        "participants": [
            "604a65f1b187e22508e2caa3",
            "604b00cb998407372c84a911",
            "604b00d6998407372c84a912"
        ],
        "title": "Demo Event",
        "description": "This is a demo event.",
        "date": "15/03/2021",
        "time": "0900",
        "place": "Delhi",
        "max_participants": 5,
        "created_at": "2021-03-12T06:59:54.000Z",
        "updated_at": "2021-03-12T06:59:54.000Z"
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
    "errors": {
        "type": "FIELD_INVALID",
        "parameter": "participants",
        "message": "Participants cannot be more than maximum allowed participants."
    }
}
```