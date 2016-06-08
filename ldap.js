import ldap from 'ldapjs';

const server = ldap.createServer();

const PORT = process.env.PORT || 1389;

function createLdapUser (username, name, avatar) {
  return {
    dn: `uid=${username},ou=People,o=grommet.io`,
    attributes: {
      cn: name,
      uid: username,
      hpPictureThumbnailURI: avatar,
      hpBusinessUnit: 'Grommet HQ',
      objectclass: 'organizationalPerson'
    }
  };
}

const people = {
  "alansouzati": createLdapUser(
    'asouza@hpe.com',
    'Alan Souza',
    'https://s.gravatar.com/avatar/eea1072044af57fa127c0f34e2410f6b?s=80'
  ),
  "tracybarmore": createLdapUser(
    'tracy.barmore@hpe.com',
    'Tracy Barmore',
    'https://s.gravatar.com/avatar/4ec9c3a91da89f278e4482811caad7f3?s=80'
  ),
  "ericsoderberg": createLdapUser(
    'eric.soderberg@hpe.com',
    'Eric Soderberg',
    'https://s.gravatar.com/avatar/99020cae7ff399a4fbea19c0634f77c3?s=80'
  ),
  "chriscarlozzi": createLdapUser(
    'chris.carlozzi@hpe.com',
    'Chris Carlozzi',
    'https://s.gravatar.com/avatar/e3e87c5215378c50fb7e8a4611c6a94d?s=80'
  ),
  "bryanjacquot": createLdapUser(
    'jacquot@hpe.com',
    'Bryan Jacquot',
    'https://s.gravatar.com/avatar/10d15019166606cfed23846a7f902660?s=80'
  )
};

server.search('o=grommet.io', (req, res, next) => {
  Object.keys(people).forEach((user) => {
    if (req.filter.matches(people[user].attributes)) {
      res.send(people[user]);
    }
  });
  res.end();
  return next();
});;

server.listen(PORT, function() {
  console.log('Grommet Search LDAP server up at: %s', server.url);
});