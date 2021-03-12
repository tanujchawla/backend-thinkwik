module.exports = {
    password: 'password',
    email: 'email',
    mongo_id: '_id',
    id: 'id',
    signup: ['email', 'password'],
    signin: ['email', 'password'],
    return_user_signup : [
        'id',
        'email',
        'created_at',
        'updated_at'
    ],
    edit_user: [
        'first_name',
        'last_name',
        'dob',
        'gender',
    ],
    return_user: [
        'id',
        'email',
        'first_name',
        'last_name',
        'dob',
        'gender',
        'created_at',
        'updated_at'
    ],
    create_event: [
        'title',
        'description',
        'date',
        'time',
        'place',
        'participants',
        'max_participants'
    ],
}