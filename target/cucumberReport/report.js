$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "To login as an Inpatient ward successfully.",
  "description": "",
  "id": "to-login-as-an-inpatient-ward-successfully.",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "As a user I want to login as an",
  "description": "Inpatient ward in OpenMRS application.",
  "id": "to-login-as-an-inpatient-ward-successfully.;as-a-user-i-want-to-login-as-an",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@InpatientWardTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user provides valid \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "click on location as Inpatient ward",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "than click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "verify that the user logged in as an Inpatient ward",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "than user logged out and quits the application successfully",
  "keyword": "And "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "to-login-as-an-inpatient-ward-successfully.;as-a-user-i-want-to-login-as-an;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 17,
      "id": "to-login-as-an-inpatient-ward-successfully.;as-a-user-i-want-to-login-as-an;;1"
    },
    {
      "cells": [
        "Admin",
        "Admin123"
      ],
      "line": 18,
      "id": "to-login-as-an-inpatient-ward-successfully.;as-a-user-i-want-to-login-as-an;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on the landing page of the openMRS application",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonPages.user_is_on_the_landing_page_of_the_openmrs_application()"
});
formatter.result({
  "duration": 17376541600,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "As a user I want to login as an",
  "description": "Inpatient ward in OpenMRS application.",
  "id": "to-login-as-an-inpatient-ward-successfully.;as-a-user-i-want-to-login-as-an;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@InpatientWardTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user provides valid Admin and Admin123",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "click on location as Inpatient ward",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "than click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "verify that the user logged in as an Inpatient ward",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "than user logged out and quits the application successfully",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 20
    },
    {
      "val": "Admin123",
      "offset": 30
    }
  ],
  "location": "Steps.user_provides_valid_and(String,String)"
});
formatter.result({
  "duration": 339934600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_location_as_inpatient_ward()"
});
formatter.result({
  "duration": 113616400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.than_click_on_login()"
});
formatter.result({
  "duration": 6141701000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.verify_that_the_user_logged_in_as_an_inpatient_ward()"
});
formatter.result({
  "duration": 17307700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.than_user_logged_out_and_quits_the_application_successfully()"
});
formatter.result({
  "duration": 5741736000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "",
  "description": "",
  "id": "to-login-as-an-inpatient-ward-successfully.;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@IsolationWardTest"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "user provides valid \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "click on Isolation ward",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "than click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "than click on Register a Patient",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "than user logged out and quits the application successfully",
  "keyword": "And "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "to-login-as-an-inpatient-ward-successfully.;;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 29,
      "id": "to-login-as-an-inpatient-ward-successfully.;;;1"
    },
    {
      "cells": [
        "Admin",
        "Admin123"
      ],
      "line": 30,
      "id": "to-login-as-an-inpatient-ward-successfully.;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on the landing page of the openMRS application",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonPages.user_is_on_the_landing_page_of_the_openmrs_application()"
});
formatter.result({
  "duration": 3270076200,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "",
  "description": "",
  "id": "to-login-as-an-inpatient-ward-successfully.;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@IsolationWardTest"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "user provides valid Admin and Admin123",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "click on Isolation ward",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "than click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "than click on Register a Patient",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "than user logged out and quits the application successfully",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 20
    },
    {
      "val": "Admin123",
      "offset": 30
    }
  ],
  "location": "Steps.user_provides_valid_and(String,String)"
});
formatter.result({
  "duration": 216772100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_isolation_ward()"
});
formatter.result({
  "duration": 78057300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.than_click_on_login()"
});
formatter.result({
  "duration": 2036248400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.than_click_on_register_a_patient()"
});
formatter.result({
  "duration": 11737664500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.than_user_logged_out_and_quits_the_application_successfully()"
});
formatter.result({
  "duration": 5756338000,
  "status": "passed"
});
});