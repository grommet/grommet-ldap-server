function createLdapUser (username, name, avatar,
  managerUid, title, location = {}, employeeNumber) {
  return {
    dn: `uid=${username}, ou=people, o=grommet.io`,
    attributes: {
      cn: name,
      uid: username,
      hpPictureThumbnailURI: `${avatar}?s=80`,
      hpPictureURI: `${avatar}?s=250`,
      hpBusinessUnit: 'Grommet HQ',
      hpWorkLocation: `hpRealEstateID=${location.buildName || "PAL20"}, ou=locations, o=grommet.io`,
      l: location.city || "Palo Alto",
      o: "Grommet",
      street: location.street || "3000 Hanover St.",
      postalCode: location.postalCode || "94304-1112",
      st: location.state || "California",
      co: "United States",
      manager: managerUid,
      title: title,
      telephoneNumber: '+1 (555) 555-5555',
      objectclass: 'organizationalPerson',
      employeeNumber: employeeNumber,
      buildingName: 'Grommet Building'
    }
  };
}

export default {
  "alansouzati": createLdapUser(
    'asouza@hpe.com',
    'Alan Souza',
    'https://s.gravatar.com/avatar/eea1072044af57fa127c0f34e2410f6b',
    'uid=eric.soderberg@hpe.com, ou=people, o=grommet.io',
    'UI/UX Developer',
    undefined,
    '276456'
  ),
  "tracybarmore": createLdapUser(
    'tracy.barmore@hpe.com',
    'Tracy Barmore',
    'https://s.gravatar.com/avatar/4ec9c3a91da89f278e4482811caad7f3',
    'uid=chris.carlozzi@hpe.com, ou=people, o=grommet.io',
    'Experience Designer',
    undefined,
    '276444'
  ),
  "ericsoderberg": createLdapUser(
    'eric.soderberg@hpe.com',
    'Eric Soderberg',
    'https://s.gravatar.com/avatar/99020cae7ff399a4fbea19c0634f77c3',
    'uid=jacquot@hpe.com, ou=people, o=grommet.io',
    'Vice President, Engineering Office',
    undefined,
    '287364'
  ),
  "chriscarlozzi": createLdapUser(
    'chris.carlozzi@hpe.com',
    'Chris Carlozzi',
    'https://s.gravatar.com/avatar/e3e87c5215378c50fb7e8a4611c6a94d',
    'uid=jacquot@hpe.com, ou=people, o=grommet.io',
    'Vice President, Design Office',
    undefined,
    '342322'
  ),
  "bryanjacquot": createLdapUser(
    'jacquot@hpe.com',
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
    '124243'
  )
};
