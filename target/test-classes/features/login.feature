Feature: To login as an Inpatient ward successfully.

  Background: 
    Given user is on the landing page of the openMRS application

  @InpatientWardTest
  Scenario Outline: As a user I want to login as an
    Inpatient ward in OpenMRS application.

    When user provides valid <username> and <password>
    And click on location as Inpatient ward
    And than click on Login
    Then verify that the user logged in as an Inpatient ward
    And than user logged out and quits the application successfully

    Examples: 
      | username | password |
      | Admin    | Admin123 |

  @IsolationWardTest
  Scenario Outline: 
    When user provides valid <username> and <password>
    And click on Isolation ward
    And than click on Login
    Then than click on Register a Patient
    And than user logged out and quits the application successfully

    Examples: 
      | username | password |
      | Admin    | Admin123 |
