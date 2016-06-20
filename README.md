# Grommet search ldap server

A simple ldap server with search capabilities on people, locations, and groups.

Created to be used in conjunction with [Grommet people finder](https://github.com/grommet/grommet-people-finder).

This LDAP server provides 3 Organizational Unit (ou): people, locations, and groups.

This LDAP server runs on top of node and was implemented on top of [ldapjs]().

# People

Represents Grommet contributors all over the globe.

### Schema

| **Attribute** | **Description** |
|--------|--------|
|uid | required. person full name |
|givenName| required. person first name |
|sn| required. person last name |
| manager | required. dn of the person's manager (e.g. `uid=jacquot@fake.grommet.io, ou=people, o=grommet.io`) |
| title | optional. work title of the person |
|telephoneNumber| optional. person's phone number |
|objectclass| set to "organizationalPerson" |
|employeeNumber| optional. person's employee identification |
| assistant: assistant | optional. dn of the person's assistant (e.g. `uid=asouza@fake.grommet.io, ou=people, o=grommet.io`) |
|pictureThumbnailURI| optional. person thumbnail image |
|pictureURI| optional. person regular size image (250x250) |
|workName| optional. name of the work location. Defaults to "Grommet HQ" |
|workLocation| optional. dn of the work location. Defaults to `lid=PAL20, ou=locations, o=grommet.io` |
|workCity| optional. work location city. Defaults to "Palo Alto" |
|workStreet| optional. work location street. Defaults to "3000 Hanover St." |
|workPostalCode| optional. work location postal code. Defaults to "94304-1112" |
|workState| optional. work location state. Defaults to "California" |
|workCountry| optional. work location country. Defaults to "United States" |

### Example Query

1. List all grommet people (returns cn and title only)

```
ldapsearch -x -h ldap.grommet.io -b "ou=people, o=grommet.io" cn title
```

# Locations

Offices that are contributing to Grommet directly or indirectly.

# Groups

Groups for the Grommet.io organization (e.g. grommet-developers, grommet-designers, ...)
