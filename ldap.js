
import ldap from './ldapjs';
import people from './people';
import locations from './locations';
import groups from './groups';

const server = ldap.createServer();

const PORT = process.env.PORT || 1389;

function handleOu (req, res, next, search, id, entities, ouName) {
  if (search.indexOf(id) > -1) {
    Object.keys(entities).some((entity) => {
      if (`${id}=${entities[entity].attributes[id]}, ou=${ouName}, o=grommet.io` === search
        && req.filter.matches(entities[entity].attributes)) {
        res.send(entities[entity]);
        return true;
      }
    });
  } else {
    Object.keys(entities).forEach((entity) => {
      if (req.filter.matches(entities[entity].attributes)) {
        res.send(entities[entity]);
      }
    });
  }

  res.end();
  return next();
}

server.search('o=grommet.io', (req, res, next) => {
  const search = req.dn.toString();
  if (search.indexOf('people') > -1) {
    handleOu(req, res, next, search, 'uid', people, 'people');
  } else if (search.indexOf('locations') > -1) {
    handleOu(req, res, next, search, 'hprealestateid', locations, 'locations');
  } else if (search.indexOf('groups') > -1) {
    handleOu(req, res, next, search, 'cn', groups, 'groups');
  }
});

server.listen(PORT, function() {
  console.log('Grommet Search LDAP server up at: %s', server.url);
});
