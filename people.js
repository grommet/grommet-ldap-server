function createLdapUser (username, name, avatar,
  managerUid, title, location = {}, employeeNumber, assistant) {
  const names = name.split(' ');
  return {
    dn: `uid=${username}, ou=people, o=grommet.io`,
    attributes: {
      cn: name,
      uid: username,
      givenName: names[0],
      sn: names[names.length - 1],
      pictureThumbnailURI: `${avatar}?s=80`,
      pictureURI: `${avatar}?s=250`,
      workName: 'Grommet HQ',
      workLocation: `lid=${location.buildName || "PAL20"}, ou=locations, o=grommet.io`,
      workCity: location.city || "Palo Alto",
      workStreet: location.street || "3000 Hanover St.",
      workPostalCode: location.postalCode || "94304-1112",
      workState: location.state || "California",
      workCountry: "United States",
      manager: managerUid,
      title: title,
      telephoneNumber: '+1 (555) 555-5555',
      objectclass: 'organizationalPerson',
      employeeNumber: employeeNumber,
      assistant: assistant
    }
  };
}

export default {
  "alansouzati": createLdapUser(
    'asouza@fake.grommet.io',
    'Alan Souza',
    'https://s.gravatar.com/avatar/eea1072044af57fa127c0f34e2410f6b',
    'uid=eric.soderberg@fake.grommet.io, ou=people, o=grommet.io',
    'UI/UX Developer',
    undefined,
    '276456'
  ),
  "tracybarmore": createLdapUser(
    'tracy.barmore@fake.grommet.io',
    'Tracy Barmore',
    'https://s.gravatar.com/avatar/4ec9c3a91da89f278e4482811caad7f3',
    'uid=chris.carlozzi@fake.grommet.io, ou=people, o=grommet.io',
    'Experience Designer',
    undefined,
    '276444'
  ),
  "ericsoderberg": createLdapUser(
    'eric.soderberg@fake.grommet.io',
    'Eric Soderberg',
    'https://s.gravatar.com/avatar/99020cae7ff399a4fbea19c0634f77c3',
    'uid=jacquot@fake.grommet.io, ou=people, o=grommet.io',
    'Vice President, Engineering Office',
    undefined,
    '287364'
  ),
  "chriscarlozzi": createLdapUser(
    'chris.carlozzi@fake.grommet.io',
    'Chris Carlozzi',
    'https://s.gravatar.com/avatar/e3e87c5215378c50fb7e8a4611c6a94d',
    'uid=jacquot@fake.grommet.io, ou=people, o=grommet.io',
    'Vice President, Design Office',
    undefined,
    '342322'
  ),
  "bryanjacquot": createLdapUser(
    'jacquot@fake.grommet.io',
    'Bryan Jacquot',
    'https://s.gravatar.com/avatar/10d15019166606cfed23846a7f902660',
    '',
    'CEO',
    {
      buildName: 'FTC06',
      city: 'Fort Collins',
      state: 'Colorado',
      street: '3404 E Harmony Rd.',
      postalCode: '80528-9544'
    },
    '124243',
    'uid=asouza@fake.grommet.io, ou=people, o=grommet.io'
  )
};
