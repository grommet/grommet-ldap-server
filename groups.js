export default {
  "grommet-designers": {
    "dn": "cn=grommet-designers, ou=groups, o=grommet.io",
    "attributes": {
      "objectClass": [
        "groupOfNames"
      ],
      "owner":[
        "uid=chris.carlozzi@fake.grommet.io, ou=people, o=grommet.io",
        "uid=jacquot@fake.grommet.io, ou=people, o=grommet.io"
      ],
      "cn": "grommet-designers",
      "description": "Group for grommet designers",
      "member":[
        "uid=tracy.barmore@fake.grommet.io, ou=people, o=grommet.io"
      ]
    }
  },
  "grommet-developers": {
    "dn": "cn=grommet-developers, ou=groups, o=grommet.io",
    "attributes": {
      "objectClass": [
        "groupOfNames"
      ],
      "owner":[
        "uid=eric.soderberg@fake.grommet.io, ou=people, o=grommet.io",
        "uid=jacquot@fake.grommet.io, ou=people, o=grommet.io"
      ],
      "cn": "grommet-developers",
      "description": "Group for grommet developers",
      "member": [
        "uid=asouza@fake.grommet.io, ou=people, o=grommet.io"
      ]
    }
  },
  "grommet-yen": {
    "dn": "cn=grommet-yen, ou=groups, o=grommet.io",
    "attributes": {
      "objectClass": [
        "groupOfNames"
      ],
      "owner": [
        "uid=tracy.barmore@fake.grommet.io, ou=people, o=grommet.io"
      ],
      "cn": "grommet-yen",
      "description": "Group for young grommet members",
      "member": [
        "uid=asouza@fake.grommet.io, ou=people, o=grommet.io"
      ],
      "email": "yen@grommet.io"
    }
  }
};
