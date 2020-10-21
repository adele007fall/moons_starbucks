module.exports = {
    server_port:8080,
    db_url:'mongodb://localhost:27017/local',
    db_schemas: [
        {file: './user_schema', collection: 'users', schemaName:'UserSchema', modelName: 'UserModel'}
    ],
    route_info: [  
        {file: './user', path: '/process/login', method:'login',type:'post'},
        {file: './user', path: '/process/adduser', method:'adduser',type:'post'},
        {file: './user', path: '/process/userlist', method:'userlist',type:'post'},  
        {file: './menus', path: '/drink', method:'drink',type:'get'},  
        {file: './menus', path: '/coldbrew', method:'coldbrew',type:'get'},  
    ]
}