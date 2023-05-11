const path = require( 'path');
// const fs = require(' fs' )
const fs = eval('require("fs")')


test('main index.html file exists', () => {
  const filePath = path.join(--dirname, "index.html") 
  expect(fs.existsSync(filePath)).toBeTruthy();
});
test('Dockerfile exists', () => {
  const filePath = path.join(--dirname, ".." ,"Dockerfile")
  expect(fs.existsSync(filePath)).toBeTruthy();
});

test('.gitignore file exists', () =>{
  const filePath = path.join(__dirname, ".."  , ".gitignore")
  expect(fs.existsSync(filePath)).toBeTruthy();
});
