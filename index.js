const
  expressObj = require( 'express' ),
  morganFn   = require( 'morgan'  ),
  app        = expressObj(),
  msgList    = [
    'Welcome to TechWeek!\n Isn\'t this so cool?',
    'Hello from Montréal!\n Isn\'t this so cool?',
    'Bienvenue à TechWeek :)\n Isn\'t this so cool?',
    'Welcome to LaSalle College :)\n Isn\'t this so cool?',
  ]
;

app.use( morganFn( 'dev' ) );

app.get( '/', function ( request, response ) {
  response
    .status( 200 )
    .send( msgList[ Math.floor( Math.random() * msgList.length ) ] )
  ;
});

let server = app.listen( '3000', function () {
  let address_map = server.address();
  console.log(
    'Waiting to say hello on '
    + address_map.address + ':' + address_map.port
  );
});