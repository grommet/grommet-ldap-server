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

Work locations for offices that have people contributing to Grommet.

### Schema

| **Attribute** | **Description** |
|--------|--------|
|lid | required. unique code for the location (e.g. "PAL20") |
|cn | required. unique code for the location (e.g. "PAL20") |
|postalCode| required. location postal code |
|postalAddress| required. full postal address separated by `$` (e.g. "3000 Hanover St. $ Palo Alto $ California $ United States $ 94304-1112")  |
| street | required. location street |
| st | required. location state |
| l | required. location city |
| co | required. location country |
| c | required. location country short (e.g. "US") |
| latitude | required. location latitude |
| longitude | required. location longitude |
| timeZone | required. location timezone difference from UTC (e.g. "+0200") |
| telephoneNumber | optional. telephone number of the location |
| category | optional. category for this location (e.g. "Headquarters")

### Example Query

1. List all grommet locations (returns lid and cn only)

```
ldapsearch -x -h ldap.grommet.io -b "ou=locations, o=grommet.io" lid cn
```

# Groups

Groups for the Grommet.io organization (e.g. grommet-developers, grommet-designers, ...)

### Schema

| **Attribute** | **Description** |
|--------|--------|
|cn| required. group name.
|description| required. useful description of the group's purpose.
|owner | required. DN list of the group owners (e.g. ["`uid=tracy.barmore@fake.grommet.io, ou=people, o=grommet.io`"]) |
|owner | required. DN list of the group members (e.g. ["`uid=asouza@fake.grommet.io, ou=people, o=grommet.io`"]) |

### Example Query

1. List all grommet groups

```
ldapsearch -x -h ldap.grommet.io -b "ou=groups, o=grommet.io"
```
