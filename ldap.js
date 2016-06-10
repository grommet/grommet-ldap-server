
import ldap from './ldapjs';
import people from './people';
import locations from './locations';

const server = ldap.createServer();

const PORT = process.env.PORT || 1389;

function handlePeople (req, res, next, search) {
  if (search.indexOf('uid') > -1) {
    Object.keys(people).some((user) => {
      if (`uid=${people[user].attributes.uid}, ou=people, o=grommet.io` === search
        && req.filter.matches(people[user].attributes)) {
        res.send(people[user]);
        return true;
      }
    });
  } else {
    Object.keys(people).forEach((user) => {
      if (req.filter.matches(people[user].attributes)) {
        res.send(people[user]);
      }
    });
  }

  res.end();
  return next();
}

function handleLocations (req, res, next, search) {
  if (search.indexOf('hprealestateid') > -1) {
    locations.some((location) => {
      if (`hprealestateid=${location.attributes.hpRealEstateID}, ou=locations, o=grommet.io` === search) {
        res.send(location);
        return true;
      }
    });
  } else {
    locations.forEach((location) => {
      if (req.filter.matches(location.attributes)) {
        res.send(location);
      }
    });
  }

  res.end();
  return next();
}

server.search('o=grommet.io', (req, res, next) => {
  const search = req.dn.toString();
  if (search.indexOf('people') > -1) {
    handlePeople(req, res, next, search);
  } else if (search.indexOf('locations') > -1) {
    handleLocations(req, res, next, search);
  }
});;

server.listen(PORT, function() {
  console.log('Grommet Search LDAP server up at: %s', server.url);
});
