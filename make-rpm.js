// prequsites: https://www.npmjs.com/package/electron-installer-redhat

var installer = require('electron-installer-redhat');

var options = {
  src: 'build/Safewallet-linux-x64/',
  dest: 'build/',
  arch: 'x86_64',
  icon: 'assets/icons/safewallet_icons/64x64.png',
  name: 'safewallet-app',
  bin: 'Safewallet',
  categories: ['Office', 'Internet'],
  homepage: 'http://ipv6admin.com',
  maintainer: '<dev@ipv6admin.com>',
};

console.log('Creating package (this may take a while)');

installer(options, function (err) {
  if (err) {
    console.error(err, err.stack);
    process.exit(1);
  }

  console.log('Successfully created package at ' + options.dest);
});
