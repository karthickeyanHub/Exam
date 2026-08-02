window.FALLBACK_DATA = {
  "App Builder": [
    {
      "question": "DreamHouse Realty has a policy that requires the phone number on Contact to be deleted when the Do Not Call checkbox is checked Which automation tool should the app builder recommend?",
      "Answer": "D",
      "Options": [
        "If-then rule",
        "Validation rule",
        "Quick action",
        "Flow"
      ]
    },
    {
      "question": "A production org includes custom objects containing confidential Information. A sandbox is needed that includes data records, excludes all of the Confidential objects, and can be refreshed weekly. Which steps should an app builder take to meet these requirements?",
      "Answer": "C",
      "Options": [
        "Create a Developer Pro Sandbox and schedule Data Loader to download selected object data weekly.",
        "Create a Full Copy Sandbox and use a sandbox template.",
        "Create a Partial Copy Sandbox and use a sandbox template.",
        "Create a Developer Sandbox and schedule Data Loader to download selected object data."
      ]
    },
    {
      "question": "Universal Containers wants sales reps to get permission from their managers before deleting Opportunities. What can be used to meet these requirements?",
      "Answer": "A",
      "Options": [
        "Two-step approval process",
        "Approval process and flow with a scheduled path",
        "Schedule-triggered flow with Submit for Approval action",
        "Approval process with a record triggered flow"
      ]
    },
    {
      "question": "Northern Trail Outfitters wants the field sales team to only see the accounts that they Own. Separate North American and European marketing teams should only see Accounts in their respective regions. The inside sales team needs to see all accounts In Salesforce. How can this be accomplished?",
      "Answer": "D",
      "Options": [
        "Set the Organization-Wide Default to Public for accounts. Create profiles for each marketing team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        "Set the Organization Wide Default to Public for accounts. Create criteria-based sharing rules for Each marketing team, and create an Inside Sales Team permission set with the “View All” setting for Accounts.",
        "Set the Organization-Wide Default to Private for accounts. Create permission setsfor each marketing Team, and create an Inside Sales Team profile with the “View All” setting for accounts.",
        "Set the Organization Wide Default to Private for accounts. Create criteria-based sharing rules for Each marketing team, and create an Inside Sales Team profile with the “View All” setting for Accounts."
      ]
    },
    {
      "question": "Sales reps at Universal Containers create multiple quotes per opportunity. Which automation tool should an app builder recommend to delete rejected quotes?",
      "Answer": "C",
      "Options": [
        "Approval process",
        "Einstein Next Best Action",
        "Flow",
        "Validation rule"
      ]
    },
    {
      "question": "An app builder wants to create a custom Sync button on Account that will Call a Lightning Web Component that connects with an external system. This action Should only be available if the custom Status field is set to Ready to Syn What should an app builder use to add this functionality to an Account record page?",
      "Answer": "C",
      "Options": [
        "Custom link",
        "Formula field",
        "Dynamic action",
        "AppExchange product"
      ]
    },
    {
      "question": "Universal Containers uses a custom object called Projects. When managers Assign projects, they set a custom field on the Project record called Estimated Hours. Once set, users should be able to decrease but not increase the value. How can an app builder meet this requirement?",
      "Answer": "C",
      "Options": [
        "Create a validation rule that uses the ISCHANGED function.",
        "Create a formula default value for the custom fiel",
        "Create a validation rule that uses the PRIORVALUE function.",
        "Create a formula field that uses the PREVGROUPVAL function."
      ]
    },
    {
      "question": "What should an app builder consider when choosing a template for a new Lightning record page?",
      "Answer": "A",
      "Options": [
        "Page structure will automatically adapt to the device being used to view the record page.",
        "To view the record page, users need “View All Data” permissions for the object.",
        "The template is unable to be changed after the initialsave.",
        "Select a new template for each type of device users use to view the record page."
      ]
    },
    {
      "question": "DreamHouse Realty (DR) has many properties for sale and wants to identify the highest value of all Offer__c records on each Property__c record. What solution should the app builder use to meet DreamHouse Realty's needs?",
      "Answer": "B",
      "Options": [
        "Text Area (Long)",
        "Master-Detail Child Object",
        "Lookup Object",
        "Multi-select Picklist"
      ]
    },
    {
      "question": "An app builder needs to deploy a new account detail page layout from sandbox to production. Which three components should an app builder include in the Change Set to ensure it deploys successfully and visually as expected? (Choose three.)",
      "Answer": "ADE",
      "Options": [
        "Detail page layout",
        "System administrator profile",
        "Lightning App Builder",
        "Custom fields",
        "Custom actions"
      ]
    },
    {
      "question": "Which three options are available when activating a Lightning page from the Lightning App Builder? (Choose three.)",
      "Answer": "ADE",
      "Options": [
        "Make the page the org default.",
        "Make the page the default homepage for specific roles.",
        "Assign the page to a combination of apps and permission sets.",
        "Make the page the default homepage for specific apps.",
        "Assign the page to a combination of apps and profiles."
      ]
    },
    {
      "question": "To increase adoption, Universal Containers is proposing changes to its Salesforce data model to allow easier visibility for sales reps into key metrics. The proposal has three custom objects related to the Account object, one with a master-detail, and two that are not. Each of these objects has 15 fields they would like to summarize on the Account object. What are two considerations for this proposal? Choose 2 answers",
      "Answer": "AD",
      "Options": [
        "Roll-up summaries allow MAX, MIN, SUM, COUNT, and AVG.",
        "An object can have 20 object references.",
        "An object can have 25 roll-up summaries.",
        "Roll-up summaries are limited to master-detail relationships."
      ]
    },
    {
      "question": "Universal Containers has a requirement that an Opportunity should have a field showing the value of its associated account's billing state. This value should not change after the Opportunity has been created. What is the recommended solution to configure this automation behavior?",
      "Answer": "D",
      "Options": [
        "Formula field",
        "Apex",
        "Roll-up summary field",
        "Workflow"
      ]
    },
    {
      "question": "universal containers has several new fields they requested for the opportunity product object. What should an app builder be able to configure using a formula field ?",
      "Answer": "A",
      "Options": [
        "A combination of the opportunity`s text and a description fields.",
        "A hyperlink to the parent account of the parent opportunity.",
        "A mix of functions and concatenation of 10 account fields and 10 opportunity fields.",
        "A Rich text area field that uses HTML to bold certain characters"
      ]
    },
    {
      "question": "DreamHouse Realty (DHR) recently acquired Cloud Kicks (CK), a company that is still on Salesforce Classic. DHR is keeping the CK Salesforce org; however, it will migrate this org to Lightning Experience. Where should the app builder find prebuilt resources to help with this project and overall adoption?",
      "Answer": "C",
      "Options": [
        "Import Wizard",
        "Lightning Object Creator",
        "AppExchange",
        "Flow Builder"
      ]
    },
    {
      "question": "Universal Containers uses a custom picklist field Account Region on the account record. They want this region to be reflected on all related contact records and stay in sync if the value of this field changes on the Account. How should an app builder meet this requirement?",
      "Answer": "B",
      "Options": [
        "Create a text field called 'Account Region' on Contact object > Create a workflow rule to update this picklist field if the Account Region field on the Account is changed.",
        "Create a formula field on the Contact object > Set the value of the formula to TEXT(Account.Account_Region__c).",
        "Create a picklist field called 'Account Region' on Contact object > Create a workflow rule to update this picklist field if the Account Region field on the Account is changed.",
        "Create a formula field on the Contact object > Set the value of the formula to ISPICKVAL(Account.Account_Region__c)"
      ]
    },
    {
      "question": "DreamHouse Realty wants to track how many lifts are being installed into customer garages. The To Be Installed custom checkbox field on the custom Lift object should be checked and an external system should be notified via an outbound message the next day when a lift is sold. What automation tool should be used to complete this task?",
      "Answer": "C",
      "Options": [
        "Approval process",
        "Workflow",
        "Flow",
        "Process Builder"
      ]
    },
    {
      "question": "Northern Trail Outfitters has two custom objects that are part of a master-detail relationship. What determines the ownership and sharing access of the detail record?",
      "Answer": "C",
      "Options": [
        "The Owner field on the Detail record.",
        "The default owner is set in the parent object's settings.",
        "The Owner field on the Master record.",
        "The owner is set independently on the detail object's settings."
      ]
    },
    {
      "question": "Universal Containers has a custom object that holds over 100 fields. The app builder wants to break up the fields into separate tabs on the lightning page. Which Lightning component is most appropriate to fulfill this requirement?",
      "Answer": "D",
      "Options": [
        "Highlights panel",
        "Record detail",
        "Field section",
        "Accordian"
      ]
    },
    {
      "question": "An app builder is tasked with adding key performance indicators on client pages. They want to see a summary of the number of open Opportunities and the number of won Opportunities for each Account. Where should the app builder go to build these new rollups?",
      "Answer": "B",
      "Options": [
        "Opportunity Object",
        "Account Object",
        "Lightning Object Creator",
        "Lightning App Builder"
      ]
    },
    {
      "question": "Shipments at Cloud Kicks (CK) are created and updated by the warehouse staff in a shipping application. The Information needs to be pushed into Salesforce on a regular basis. CK's app builder creates a custom object called Delivery_c to track the information. How can the app builder prevent creating duplicate delivery records and update the correct existing records when migrating data from the shipping application?",
      "Answer": "B",
      "Options": [
        "Use the Import Wizard and match on the tracking number.",
        "Create a unique External ID field and use Dataloader.",
        "Use the Import Wizard and match on the Salesforce ID.",
        "Create a duplicate match rule and use Dataloader."
      ]
    },
    {
      "question": "DreamHouse Realty requires that field value changes for certain fields such as Asking_Price__c and Real_Estate_Agent\"c on their House__c custom object show up prominently on Chatter. What Chatter feature should the app builder utilize?",
      "Answer": "C",
      "Options": [
        "Thanks",
        "Publisher Actions",
        "Feed Tracking",
        "Topics"
      ]
    },
    {
      "question": "Northern Trail Outfitters uses a custom object to track travel requests. Rangers want to have automatic posts on a record whenever a travel request has been approved. Which feature should be used to accomplish this?",
      "Answer": "B",
      "Options": [
        "Workflow rule",
        "Feed tracking",
        "Auto-response rule",
        "Feed quick action"
      ]
    },
    {
      "question": "Northern Trail Outfitters uses a custom object to track travel requests. Rangers want to have automatic posts on a record whenever a travel request has been approved. Which feature should be used to accomplish this?",
      "Answer": "B",
      "Options": [
        "Workflow rule",
        "Feed tracking",
        "Auto-response rule",
        "Feed quick action"
      ]
    },
    {
      "question": "Universal containers uses a custom called reviews to capture information generated by interviews during the candidate process. The review records are visible to any user that has access to the related custom candidate record. The VP of human resources wants the comment field on the review to be private to anyone outside of the HR department",
      "Answer": "A",
      "Options": [
        "Create a page layout with the field and use field level security to hide the from all others users",
        "Create a sharing rule to share the filed with the VP of HR with role and subordinates",
        "Create a page layout with the field for HR users and another page layout without the field for all other users",
        "Create an apex sharing rule to share the field with users that have HR in their role"
      ]
    },
    {
      "question": "Service agents at Ursa Major Solar want a more condensed case view. Service agents also want to be able to modify the associated contact and account records from the case page layout on the Lightning record page. Which two components should an app builder use to meet these requirements? Choose 2 answers",
      "Answer": "AD",
      "Options": [
        "Related record",
        "Path",
        "Rich text",
        "Tabs"
      ]
    },
    {
      "question": "Sales reps want the ability to see who can view their account records and how the people have access. Which button should the app builder add to the Account page layout to enable this?",
      "Answer": "C",
      "Options": [
        "Sharing Hierarchy",
        "New Task",
        "Sharing",
        "Fait"
      ]
    },
    {
      "question": "Cloud Kicks wants to start tracking how many shoe subscriptions have been Sold for each shoe catalog. A master-detail relationship exists between the Subscription And the shoe_c objects. Which type of field should an app builder create?",
      "Answer": "A",
      "Options": [
        "Roll-up summary field",
        "Lookup field",
        "Master-detail field",
        "Sum field"
      ]
    },
    {
      "question": "Sales reps at Universal Containers use Salesforce on their mobile devices. They want a way to add new contacts quickly and then follow up later to complete the Additional information necessary. Which mobile solution should an app builder recommend to create the new contact?",
      "Answer": "A",
      "Options": [
        "Build a global action to create Contacts.",
        "Use Path and set pre-defined values.",
        "Customize the mobile menu to move Contacts to the top.",
        "Add a compact layout to Contacts."
      ]
    },
    {
      "question": "Ursa Major Solar (UMS) is planning to hire some new employees. UMS wants to allow a job candidate (Job_Candidate__c) to apply for multiple open positions (Open_Position__c) and then be able to view the applications (Application__c) on the job candidate record. UMS also wants to view all the applications for a specific open position.",
      "Answer": "CD",
      "Options": [
        "Create a master-detail relationship on Open_Position__c to Application__c.",
        "Create a master-detail relationship field on Job_Candidate__c to Application__c.",
        "Create a master-detail relationship field on Application__c to Job_Candidate__c.",
        "Create a master-detail relationship field on Application__c to Open_Position__c."
      ]
    },
    {
      "question": "Universal Containers (UC) needs a picklist field called Status on three separate custom objects. UC has a requirement to share the list of values for this field across each object.",
      "Answer": "C",
      "Options": [
        "Related Picklist",
        "Shared Custom Field",
        "Global Picklist Value Set",
        "Dependent Picklist"
      ]
    },
    {
      "question": "When a sales rep submits an account for approval, Universal Containers wants the user to answer additional questions via a popup window to populate additional record fields. What should an app builder use to achieve the desired result?",
      "Answer": "D",
      "Options": [
        "Process Builder and Flow",
        "Lightning component and Process Builder",
        "Custom picklist field and Process Builder",
        "Custom button and Flow"
      ]
    },
    {
      "question": "The finance manager at Universal Containers wants to receive a new business notification email each time a new client is won. The sales manager wants to receive a task letting them know to onboard the new client unless it is a top-tier client. Which automation tool should an app builder use to best address all these requests?",
      "Answer": "A",
      "Options": [
        "Record-triggered flow",
        "Screen flow",
        "Apex",
        "Approval processs"
      ]
    },
    {
      "question": "Universal Containers wants to dynamically display a component on a Lightning record page for an account based on criteria about the related contact. Which solution should an app builder use to fulfill this requirement? Add a related record component to the page layout. Hide the component behind a tab on the page layout. Set the filter type on the component visibility to display based on user permissions, using custom Permission to define the dynamic criteria Set the component visibility to display based on an advanced filter type, using the contact field(s) to Define the dynamic criteria",
      "Answer": "D",
      "Options": [
        "Add a related record component to the page layout.",
        "Hide the component behind a tab on the page layout.",
        "Set the filter type on the component visibility to display based on user permissions, using custom Permission to define the dynamic criteria",
        "Set the component visibility to display based on an advanced filter type, using the contact field(s) to Define the dynamic criteria"
      ]
    },
    {
      "question": "Universal Containers would like to embed a chart of all related Opportunities, by stage, on the Account detail page. Which type of report should the App Builder create to add to the Account page layout?",
      "Answer": "A",
      "Options": [
        "A summary report on the Opportunity object.",
        "A summary report on the Account object.",
        "A tabular report on the Account object.",
        "A tabular report on the Opportunity object."
      ]
    },
    {
      "question": "An app builder has created a new report type but users are unable to select it from the Report Type list when making a new report for records they own. What could be causing this issue?",
      "Answer": "A",
      "Options": [
        "The report type is in a status of In Development.",
        "Access to the necessary object is unavailable.",
        "The report type is in a status of Deployed.",
        "Access to Create and Customize Reports is disabled."
      ]
    },
    {
      "question": "The appraisal team at DreamHouse Realty wants to leverage Salesforce mobile app. What are three things an app builder should do to optimize mobile experience? (Choose three.)",
      "Answer": "ACE",
      "Options": [
        "Put the most important fields in the compact layout so they are easy to find.",
        "Create individual customized layouts for different phone operating systems.",
        "Minimize the amount of formula fields and lookup fields to reduce page load time.",
        "Avoid using default fields values so that the user is required to fill in all fields on the screen.",
        "Use Global Actions to make it easy to perform vital functionality on mobile."
      ]
    },
    {
      "question": "Universal Containers wants to create a custom checkbox formula field on the Opportunity object. This formula should evaluate to true if the following conditions are met: • Stage is set to Negotiation/Review • Close Date is less than 1 week away Which formula meets these requirements?",
      "Answer": "A",
      "Options": [
        "AND(ISPICKVAL(StageName, 'Negotiation/Review'), CloseDate - 7 < TODAY() )",
        "AND(ISPICKVAL(StageName, 'Negotiation/Review'), CloseDate - DAY(7) < TODAY() )",
        "AND(StageName = 'Negotiation/Review', CloseDate - 7 < TODAY() )",
        "AND(StageName = 'Negotiation/Review', CloseDate - DAY(7) < TODAY() )"
      ]
    },
    {
      "question": "An app builder has downloaded a component from the AppExchange successfully; however, they are unable to add it to the Lightning home page. Which two reasons can be preventing the app builder from being able to add the custom component? (Choose two.)",
      "Answer": "CD",
      "Options": [
        "The component requires a developer permission to add it to the page with the App Builder.",
        "A custom tab must be created to add custom components to the page with the App Builder.",
        "The component is tagged for record pages instead of home pages and is not showing up in the App Builder.",
        "My Domain must be deployed to add custom components to the page with the App Builder."
      ]
    },
    {
      "question": "Universal Containers utilizes opportunities and a custom object called Detailed_Sales__c. The company would like to roll sales metrics up to an opportunity for only Detailed_Sales__c records that have their picklist status set to Active. What is the recommended method for the app builder to achieve this request?",
      "Answer": "D",
      "Options": [
        "Utilize Apex code to roll up the desired amounts.",
        "Create a lookup relationship between the parent and child object with a roll-up summary field that filters on the status field.",
        "Utilize the AppExchange to download a third-party application that can roll up the sales dollars with the appropriate filter.",
        "Create a master-detail relationship between the parent and child object with a roll-up summary field that filters on the status field."
      ]
    },
    {
      "question": "When an opportunity close date is delayed by more than 60 days, the manager and the VP of Sales must approve the change. Which two solutions will meet the requirement? (Choose two.)",
      "Answer": "AD",
      "Options": [
        "Build an approval process that requires unanimous approval from the manager and VP of Sales.",
        "Build a validation rule that does not allow a user to save the opportunity record.",
        "Create a workflow rule that checks for close date less than 60 days and add an e-mail alert.",
        "Create a Process Builder flow that submits the record for an approval process."
      ]
    },
    {
      "question": "Universal Containers (UC) wants to deliver purchased containers to remote construction sites. These locations are missing a traditional street address. In these cases the customer will supply UC with the coordinates to the location. What type of field should the app builder use to capture this information?",
      "Answer": "C",
      "Options": [
        "External Lookup",
        "Number",
        "Geolocation",
        "Text"
      ]
    },
    {
      "question": "The CFO of Cloud Kicks needs a way for new vendors to accept terms on agreements for any new major retail store lease before the opportunity can be closed. Which feature should be used to handle this requirement?",
      "Answer": "C",
      "Options": [
        "Email Alert",
        "Dynamic Action",
        "Approval Process",
        "Validation Rule"
      ]
    },
    {
      "question": "An app builder is preparing to deploy a new app from the sandbox to Production using change sets. Which two considerations should an app builder keep in mind during this process? Choose 2 answers",
      "Answer": "AC",
      "Options": [
        "Transactions will revert if the deployment errors.",
        "Users should be logged out of production when receiving inbound change sets.",
        "Change sets do not include all components and may have to perform some changes Manually.",
        "Salesforce Connect automatically establishes a link between environments."
      ]
    },
    {
      "question": "At Ursa Major Solar there is a requirement for a new field called Planet Details on the Planet object where users can write detailed descriptions that can include pictures and links. What field type should the app builder utilize to fulfill this requirement?",
      "Answer": "B",
      "Options": [
        "Long Text Area",
        "Rich Text Area",
        "Multi-Select Picklist",
        "URL"
      ]
    },
    {
      "question": "Universal Containers wants to track installation information once it container has been purchased on a custom object. Sales reps should have visibility of all the installation with their opportunities. visibility of all the installations associated with their opportunities. What kind of relationship should this new object have to the Opportunity?",
      "Answer": "B",
      "Options": [
        "Many to Many",
        "Master-Detail",
        "Lookup",
        "Hierarchical"
      ]
    },
    {
      "question": "What is the process to upgrade an unmanaged package that is currently installed in production?",
      "Answer": "B",
      "Options": [
        "Install the new version to a Developer org then deploy to production.",
        "Uninstall the current version and install the new version.",
        "Click the update link on the Installed Packages page.",
        "Use the Install Wizard to install the upgrade to production."
      ]
    },
    {
      "question": "Duplicate management for Leads has been implemented at Universal Containers but it seems duplicate leads are still being created. The Org Wide Default (OWD) is set to \"Private\" for Leads. Which two actions help prevent duplicate Leads from being created? Choose 2 answers",
      "Answer": "AC",
      "Options": [
        "Change the lead Hatching Rule to Block on create.",
        "Change OWD for Leads to Public Read.",
        "Change the Lead Duplicate Rule details to Bypass Sharing Rules.",
        "Change the Lead Assignment Rule to check for duplicates."
      ]
    },
    {
      "question": "The Recruiting team at AW Computing captures the job acceptance and date of hire of a candidate on the Job Application custom object. Once the candidate accepts the recruiter's Job offer, the date of hire should be entered and not be changed on subsequent record edits. Which validation formula should the app builder use?",
      "Answer": "C",
      "Options": [
        "(ISBLANK(Job_Accepted__c) || NOT(ISCHANGED(Hire_Date__c))",
        "(ISBLANK(Job_Accepted__c) && NOT(ISCHANGED(Hire_Date__c))",
        "NOT(ISBLANK(Job_Accepted__c)) && ISCHANGED(Hire_Date__c)",
        "NOT(ISBLANK(Job_Accepted__c)) || ISCHANGED(Hire_Date__c)"
      ]
    },
    {
      "question": "Cloud Kicks (CK) tracks the support level of its customers on the account record page. CK wants to show a text notification on a case record page when the related account is a platinum-level customer. How could an app builder meet this requirement?",
      "Answer": "A",
      "Options": [
        "Add a rich text area to the Case Lighting page > Set the component visibility of the rich text area to show when the account support level is platinum.",
        "Create a text-only Visualforce page > Drag the Visualforce component into the Case page layout > Set its visibility to show when the account support level is platinum.",
        "Create a text-only Visualforce page > Clone the case page layout > Drag the Visualforce component into the page, and assign the layout to platinum cases.",
        "Clone the Case Lightning page > Add a rich text area to the new page, and assign this page to platinum accounts."
      ]
    },
    {
      "question": "AW Computing uses a private sharing model for opportunities. Whenever an opportunity with a type of Service Agreement is created, all users in the Service Manager role should be able to view the opportunity. Which tool should AW Computing use to accomplish this?",
      "Answer": "B",
      "Options": [
        "Owner-based sharing rules",
        "Criteria-based sharing rules",
        "Apex sharing rules",
        "Manual sharing"
      ]
    },
    {
      "question": "An app builder at Ursa Major Solar has been working on a new custom app in a sandbox that has been upgraded to the next major Salesforce version, and their production instance is still on the current Salesforce version. The development is complete and they are ready to deploy a change set. What should the app builder consider when planning the deployment?",
      "Answer": "D",
      "Options": [
        "The change set components will be upgraded to the next version in production.",
        "The change set will be automatically deployed when production is upgraded.",
        "The deployment is not possible due to different versions.",
        "It will fail if there is a feature only available in the next version."
      ]
    },
    {
      "question": "An app builder needs to change the data type of some custom fields. Which two limitations should the app builder be aware of when changing the data type of a custom field? (Choose two.)",
      "Answer": "AC",
      "Options": [
        "It is not possible to change the data type of a formula field to any data type.",
        "It is not possible to change the data type of a field used as an External ID from number to text.",
        "It is not possible to change the data type of a Text Area (Long) field to Text.",
        "It is not possible to change the data type of field referenced by Apex code."
      ]
    },
    {
      "question": "DreamHouse Realty wants to display a weather map component on a Lightning record page when a house is scheduled for a showing. How should the app builder meet the requirement? Component visibility Field-level security Field-level field Sharing rules",
      "Answer": "A",
      "Options": [
        "Component visibility",
        "Field-level security",
        "Field-level field",
        "Sharing rules"
      ]
    },
    {
      "question": "Universal Containers (UC) has several picklist fields on the Account object whose values are routinely modified to meet changing business requirements. Due to these revolving changes, UC has a high number of inactive picklist values that are impacting system performance and user experience. What can the app builder do to alleviate this issue?",
      "Answer": "A",
      "Options": [
        "Set up Global Values in Picklist Value Sets.",
        "Remove upper bound on inactive picklist values in Picklist Settings.",
        "Establish upper bound on existing picklists in Picklist Settings.",
        "Convert the picklist fields to a different field type that will still meet the business requirements."
      ]
    },
    {
      "question": "How should an app builder configure access to a contact's Twitter profile for Salesforce mobile app users?",
      "Answer": "A",
      "Options": [
        "Add the Twitter component to mobile view Lightning pages.",
        "Add an AppExchange Lightning Component to the mobile app.",
        "Add a Twitter Quick Action to the mobile navigation.",
        "Add a formula field to the Contact page layout."
      ]
    },
    {
      "question": "A business user at Universal Containers wants to update an Account directly from an Opportunity record. What should the app builder create to allow the business user to make these edits?",
      "Answer": "A",
      "Options": [
        "An update record action with a related record component.",
        "An update record action with a details component",
        "Formula fields displaying the Account fields.",
        "Opportunity fields updated by a process."
      ]
    },
    {
      "question": "Cloud Kicks works on an annual subscription model. When a sales rep marks an opportunity as closed won, a newopportunity should automatically be created for the renewal. The contracts team works outside of Salesforce but also needs to be notified about closed deals in order to initiate the contract process with the customer. Which automation solution would meet these requirements? Approval Process Validation Rule Process Builder Workflow Rule",
      "Answer": "C",
      "Options": [
        "Approval Process",
        "Validation Rule",
        "Process Builder",
        "Workflow Rule"
      ]
    },
    {
      "question": "The sales team receives a list of approximately 800 leads each morning from the marketing team. The marketing team does not know if any of the leads are currently in the pipeline and sends the entire list each morning. Which tool should be used to import these leads into Salesforce while preventing the duplicates from being inserted?",
      "Answer": "C",
      "Options": [
        "Manual entry",
        "Data Loader",
        "Data Import Wizard",
        "Dataloader.io"
      ]
    },
    {
      "question": "The Director of Marketing at Northern Trail Outfitters wants the app builder to create a formula field that tracks how many days have elapsed since a contact was sent a marketing communication. The director is only interested in whole units. Which function should be used to return a date for calculating the difference?",
      "Answer": "B",
      "Options": [
        "DTEVALUE()",
        "TODAY()",
        "NOW()",
        "DATETIMEVALUE()"
      ]
    },
    {
      "question": "new app builder on the Cloud Kicks team is getting familiar with the data model. They want to see how standard objects and custom objects relate. Which functionality should the app builder use to view these relationships?",
      "Answer": "D",
      "Options": [
        "Fields & Relationships",
        "Lightning App Builder",
        "Object Manager",
        "Schema Builder"
      ]
    },
    {
      "question": "The marketing director is concerned that too many car parts were given away for free last year. Which functionality should be used to ensure all free parts receive the marketing directors' sign-off?",
      "Answer": "D",
      "Options": [
        "Stack post",
        "Chatter approval",
        "Automated email message",
        "Approval process"
      ]
    },
    {
      "question": "Universal Containers is adding drone delivery to service offerings, and the developer has written and tested code prior to deployment to production, and the change set is ready to go. The deployment window will occur when the developer is on vacation. What can the app builder do to ensure a smooth deployment to production?",
      "Answer": "B",
      "Options": [
        "Validate the outbound change set.",
        "Validate the inbound change set.",
        "Use a metadata package set.",
        "Remove Apex classes from inbound change set."
      ]
    },
    {
      "question": "Universal Containers manages leads in a Lead qualification queue where sales reps can accept ownership of the Lead. Campaign members are required to have a sales owner. What validation rule should an app builder configure?",
      "Answer": "C",
      "Options": [
        "AND( ISBLANK(Lead.Owner.Id) )",
        "NOT(ISNEW() && ISBLANK(Lead.Owner:Queue.Id))",
        "AND(ISNEW(), ISBLANK(Lead.Owner:User.Id))",
        "NOT(ISBLANK(Lead.Owner:Queue.Id))"
      ]
    },
    {
      "question": "Cloud Kicks has created a custom object called Interests which is joined to Accounts by way of a junction object called Account Interest. What is the impact to users attempting to view an Account and the associated Account Interest records if they are without read access to the Interest object?",
      "Answer": "C",
      "Options": [
        "Users will be able to view the Account Interest records and will have read-only access to the Interest records.",
        "Users will be unable to view Account records that have a related Account Interest record.",
        "Users will be able to view the Account Interest record, but unable to view the field or any information relating back to the Interest record.",
        "Users will be unable to view the Account Interest records or the Interest records."
      ]
    },
    {
      "question": "The VP of sales at AW Computing would like a Roll-Up Summary field on the Account object to aggregate the amount of opportunities related to an Account. The app builder is unable to implement this change. Why is the app builder unable to fulfill the request?",
      "Answer": "B",
      "Options": [
        "Currency fields are unable to be referenced in Roll-Up Summary fields.",
        "The organization has Advanced Currency Management enabled",
        "Roll-Up Summary fields are unavailable on the Account object.",
        "The default currency is not an active currency in the organization,"
      ]
    },
    {
      "question": "Universal Containers wants to improve the process to create Opportunity records related to an Account. Many fields can be populated based on the Account record. Some fields require input from the user. What should an app builder configure to meet the requirement?",
      "Answer": "B",
      "Options": [
        "Process Builder triggered from Opportunity update",
        "Quick Action on the Account object",
        "Quick Action on the Opportunity object",
        "Process Builder triggered from Account update"
      ]
    },
    {
      "question": "A customer service representative at a call center would like to be able to collect information from customers using a series of question prompts. What could be used to accomplish this?",
      "Answer": "B",
      "Options": [
        "Salesforce Connect",
        "Flow",
        "Workflow Rules",
        "Process Builder"
      ]
    },
    {
      "question": "Which three standard component types are available in Lightning App Builder? (Choose three.)",
      "Answer": "BDE",
      "Options": [
        "Plain text",
        "Report details",
        "Filter report",
        "Rich text",
        "Recent items"
      ]
    },
    {
      "question": "At Ursa Major Solar there is a requirement for a new field called Planet Details on the Planet object where users can write detailed descriptions that can include pictures and links. What field type should the app builder utilize to fulfill this requirement?",
      "Answer": "B",
      "Options": [
        "Long Text Area",
        "Rich Text Area",
        "Multi-Select Picklist",
        "URL"
      ]
    },
    {
      "question": "What is one limitation of using schema builder when creating a field?",
      "Answer": "B",
      "Options": [
        "Cannot see existing relationships between objects.",
        "Cannot add fields to page layouts.",
        "Cannot create lookup relationships.",
        "Cannot create formula fields."
      ]
    },
    {
      "question": "Universal Containers wants to give sales managers the ability to quickly provide sign off on an Opportunity via the Opportunity record page when a sales rep has discounted a deal by 20% to 30%. Which two features should be used for this requirement? (Choose two.)",
      "Answer": "BC",
      "Options": [
        "Validation Rule",
        "Dynamic Actions",
        "Approval Process",
        "Schema Builder"
      ]
    },
    {
      "question": "When a deal is closed-won, it has to be approved by the owner ' s Manager prior to being added to the leaderboard for a quarterly sales Competition. An opportunity is won on the last day of the quarter and the Manager is on vacation. What is recommended to ensure all of the appropriate deals are reviewed and the leaderboard is up to date?",
      "Answer": "C",
      "Options": [
        "Have the manager ' s assistant reassign the approval request.",
        "Use a quick action to forward the approval request to the next level approver.",
        "Set up a delegated approver for the manager.",
        "Use an assignment rule to automatically assign a delegated approver."
      ]
    },
    {
      "question": "Universal Containers has a custom picklist called Support Level on the Account object. They would like to show the real-time value of Support Level on all case records. How should an app builder implement this requirement?",
      "Answer": "A",
      "Options": [
        "Create a formula field on the Case object using the TEXT function.",
        "Create a roll-up summary field using Support Level on the Account object.",
        "Create a formula field on the Account object using the ISPICKVAL function.",
        "Create a Process Builder and use a field update on the Case object."
      ]
    },
    {
      "question": "Universal Containers (UC) requires that all users specify a contract is sent on each Opportunity prior to marking it as \"Closed Won\". UC wants to be able to report on how many Opportunities have sent Contracts compared to how many have a missing contract when the Opportunities closed. Which field type should an app builder configure to fulfill this requirement?",
      "Answer": "D",
      "Options": [
        "Text",
        "Text Area",
        "Picklise",
        "Checkbox"
      ]
    },
    {
      "question": "Cloud Kicks (CK) Is finding sales reps are Inconsistent in data entry when deals are won. CK requires that custom shoes are shipped within two weeks after the close date. A custom field called Scheduled Ship Date on the opportunity records the ship date.How should the app butler ensure this field is properly filed out before setting the opportunity to closed won?",
      "Answer": "D",
      "Options": [
        "ISPICKVAL(StageName, \"Closed Won\") && (Scheduled_Ship_Date__c - CloseDate) > 14",
        "ISPICKVAL(StageName, \"Closed Won\") && (CloseDate - Scheduled_Ship_Date__c) > 14",
        "OR(ISPICKVAL(StageName, \"Closed Won\") && (Scheduled_Ship_Date__c - CloseDate) > 14, ISBLANK(Scheduled_Ship_Date__c))",
        "OR(ISPICKVAL(StageName, \"Closed Won\") && (CloseDate - Scheduled_Ship_Date__c) > 14, ISBLANK(Scheduled_Ship_Date__c))"
      ]
    },
    {
      "question": "An app builder wants to create a custom object and 10 fields. What should they use to create the object, fields, and relationships quickly from one place?",
      "Answer": "A",
      "Options": [
        "Schema Builder",
        "Developer Console",
        "Manage Field Permissions",
        "Lightning Object Creator"
      ]
    },
    {
      "question": "universal Containers asked the app builder to ensure when an Account type changes to ' Past-Customer ' the contacts directly related to That account get an updated status of ' Re-Market ' . Which automation should the app builder use to accomplish this task?",
      "Answer": "D",
      "Options": [
        "Validation rule",
        "Lightning component",
        "Screen flow",
        "Record-triggered flow"
      ]
    },
    {
      "question": "A sales manager has noticed that reps continue to input contacts directly in their phone instead of adding them to Salesforce. What should an app builder recommend to ensure the data makes it into Salesforce?",
      "Answer": "C",
      "Options": [
        "Enable in-app notifications every time a contact is created.",
        "Allow Salesforce to import Contacts from mobile device Contact lists.",
        "Enable offline create, edit, and delete in Salesforce for Android and iOS.",
        "Allow users to relate a contact to multiple accounts."
      ]
    },
    {
      "question": "oud Kicks is implementing an approval process for opportunities that requires managers to approve all opportunities above $50,000 before they can be marked as Closed Won. Which two delivery methods can a manager utilize to respond to approval requests in the Salesforce mobile app? (Choose two.)",
      "Answer": "BC",
      "Options": [
        "Home Screen",
        "In-App Notification",
        "Record Detail",
        "Navigation Menu"
      ]
    },
    {
      "question": "he marketing team at Universal Containers has a list of 400 leads it wants to upload to Salesforce. The team needs to avoid creating duplicate records. Which two actions should be taken to meet this requirement? (Choose two.)",
      "Answer": "AD",
      "Options": [
        "Utilize a Lead Matching Rule and corresponding Duplicate Rule to block newly created duplicate leads.",
        "Use Data Loader's update function to import leads and match to existing records based on e-mail address.",
        "Enable Duplicate Matching in the Data Management section in Setup and activate the Lead-to-Lead scenario.",
        "Upload the lead list using the Import Wizard and select a Matching Type to prevent duplicate lead creation."
      ]
    },
    {
      "question": "An app builder at Dream House Realty created a custom object which has fields containing data from two different objects via related lookups. What is needed to create \"with\" or \"without\" reports on the new custom object?",
      "Answer": "D",
      "Options": [
        "Row-Level Formula",
        "Report Bucket Field",
        "Report Filters",
        "Custom Report Type"
      ]
    },
    {
      "question": "universal Containers (UC) has a time-sensitive need for a custom component to be built in 4 weeks; UC developers require additional enablement to complete the work and are backlogged by several months. Which option should an app builder suggest to meet this requirement?",
      "Answer": "A",
      "Options": [
        "Use an AppExchange solution.",
        "Build a screen flow page.",
        "Build a Lightning record page.",
        "Use a Boit solution"
      ]
    },
    {
      "question": "Universal Containers (UC) has a custom Invoice object and a custom Invoice Line Item object. The Invoice Line Item object has a lookup relationship to the Invoice. UC would like to convert the lookup relationship to a master-detail relationship but is unable to do so. Which two reasons could be preventing this relationship conversion? (Choose two.)",
      "Answer": "AB",
      "Options": [
        "There are already two master-detail relationships on the Invoice Line Item.",
        "Invoice Line Item records exist without having the Invoice lookup field populated.",
        "Custom objects are unable to be on the detail side of a master-detail relationship.",
        "There is a roll-up summary field on the Invoice object."
      ]
    },
    {
      "question": "Universal Containers generates leads from three different sources: web, trade shows, and partners. Some of the information collected is applicable to all sources, there is also information that is unique to each type of lead. What should an app builder configure to meet these requirements?",
      "Answer": "D",
      "Options": [
        "Create three sections on the lead layout and instruct users to collapse the non-relevant fields",
        "Create a partner community and a record type for web and trade show leads",
        "Create custom page layouts for each type of lead only containing the relevant fields",
        "Create three lead record types each with its own page layout containing the relevant fields"
      ]
    },
    {
      "question": "Universal Containers has a Lightning record page that supports both the mobile app and desktop. An app builder has downloaded a custom Lightning component from AppExchange, but users are unable to view the component on mobile devices. What can be the issue?",
      "Answer": "D",
      "Options": [
        "The record page template is unable to support mobile devices.",
        "The component needs to be activated.",
        "The record page needs to be activated.",
        "The component has been developed for Desktop Pages."
      ]
    },
    {
      "question": "Cloud Kicks wants to summarize the number of open Cases related to an Account, as well as the number of closed Cases to indicate whether customer support utilization is high, medium, or low. Two number fields have been created: NUM_Open_Cases__c and NUM_Closed_Cases__c. Which two automation solutions would meet these business requirements? (Choose two.)",
      "Answer": "BD",
      "Options": [
        "Workflow",
        "AppExchange",
        "Process Builder",
        "Apex"
      ]
    },
    {
      "question": "Cloud Kicks (CK) wants to begin socializing and collaborating within Salesforce around customer accounts to discuss various topics. CK would like all company employees to see these conversations. Which two features of Chatter would meet CK's business needs? (Choose two.)",
      "Answer": "BD",
      "Options": [
        "Use Chatter actions to create tasks to complete.",
        "Set up new public Chatter groups.",
        "Set up new private Chatter groups.",
        "Use post action on the Account object."
      ]
    },
    {
      "question": "Cloud Kicks wants to display the number of opportunities that are Closed Won with a Close Date within the last year on the Account detail page. Which tool should an app builder use to implement this?",
      "Answer": "B",
      "Options": [
        "Process Builder",
        "Roll-Up Summary Field",
        "Activity Timeline",
        "Workflow Rule"
      ]
    },
    {
      "question": "Universal Containers uses the Asset object to track products that are installed at customer locations. A new object, Asset Inventory, has been created to capture details about the asset. Which approach should the app builder take to show Asset Inventory as a related list on Asset?",
      "Answer": "D",
      "Options": [
        "Create a roll-up on Asset. Add the Asset Inventory related list to the Asset page layout.",
        "Create a master-detail relationship on Asset to Asset Inventory. Add the Asset Inventory related list to the Asset page layout.",
        "Create a junction object to relate Asset Inventory and Asset. Add the Asset Inventory related list to the Asset page layout.",
        "Create a lookup relationship on Asset Inventory to Asset. Add the Asset Inventory related list to the Asset page layout."
      ]
    },
    {
      "question": "Dream House Realty has a mentorship program that pairs experienced Realtors with new Realtors. Each experienced Realtor can mentor one or several new Realtors, and each new Realtor is required to work with a single experienced Realtor they report to for a probationary period. What type of relationship would an app builder set up to meet this specification?",
      "Answer": "D",
      "Options": [
        "Many-to-many",
        "Indirect lookup",
        "Lookup",
        "Master-detail"
      ]
    },
    {
      "question": "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects. Which field types could be used in roll-up summary fields to accomplish this? Choose 3 answers",
      "Answer": "ABC",
      "Options": [
        "Currency",
        "Percent",
        "Date",
        "Checkbox",
        "Time"
      ]
    },
    {
      "question": "An app builder wants to update a field on the parent record When a child record connected via lookup is delete Which automation should the app builder use?",
      "Answer": "A",
      "Options": [
        "Record-triggered flow",
        "Validation rule",
        "Autolaunched flow",
        "Quick action"
      ]
    },
    {
      "question": "At Ursa Solar Major, only users with the Outer Planets profile Need to see the Jupiter field on the Solar System object. How should the app builder satisfy this requirement?",
      "Answer": "B",
      "Options": [
        "Classic encryption",
        "Field-level security",
        "Filtered view",
        "Sharing rules"
      ]
    },
    {
      "question": "The Universal Containers data manager has been complaining about the lack of data integrity on Contact records. Sales reps have not been filling out the Region field. The data manager wants the Region field filled out only for Contacts that are associated to Accounts that have been marked as ‘High Priority’ on the Customer Status field. What can the app builder do to fulfill this requirement?",
      "Answer": "B",
      "Options": [
        "Make the Region field required on Contact.",
        "Create a validation rule on Contact.",
        "Create 4 validation rule on Account.",
        "Make the Customer Status field required or Account."
      ]
    },
    {
      "question": "An app builder wants to add the option to 'Send New Email' from Leads, Contacts and Accounts for users on mobile. What is the benefit of using global actions to accomplish this?",
      "Answer": "A",
      "Options": [
        "Global actions can be accessed anywhere actions are pages, feed and Chatter groups,",
        "Salesforce Lightning Component Library houses existing global actions prebuild for use.",
        "The global action's layout automatically clones the default page layout.",
        "Global actions are record-specific and are available when searching that particular"
      ]
    },
    {
      "question": "ursa Major Solar (UMS) uses Cases to track customer complaints, an Issue__c object to represent known problems with its solar panels, and a Case_Issue__c junction object to relate known problems to customer complaints. Periodically, UMS conducts audits which require the auditing users to view Case_Issue__c records. Which access levels must be configured to allow UMS users to access Case_Issue__c records?",
      "Answer": "B",
      "Options": [
        "Read-Only access on Case_Issue__c",
        "Read-Only access on Case and Issue__c",
        "Read-Only access on Issue__c and Case_Issue__c",
        "Read-Only access on Case and Case_Issue__c"
      ]
    },
    {
      "question": "Where can an app builder edit an existing app to add components to the utility bar?",
      "Answer": "C",
      "Options": [
        "App Menu",
        "Lightning App Builder",
        "App Manager",
        "Lightning Record Page"
      ]
    },
    {
      "question": "Northern Trail Outfitters wants to change a master-detail relationship on Account to a lookup relationship with a custom object Park. The app builder tries to reconfigure this but is unable to do so. What could be causing this?",
      "Answer": "C",
      "Options": [
        "The Park object needs at least one Master-Detail field for reporting.",
        "The Account is included in a flow process on the Park object.",
        "The Account record includes Parks roll-up summary fields.",
        "The park records have existing formulas on the Account."
      ]
    },
    {
      "question": "Universal Containers created a 'New Task' custom action on the Opportunity object. The action was added to all page layouts in the Mobile & Lightning Actions section. Which Lightning component should the app builder add to the layout to display the action?",
      "Answer": "B",
      "Options": [
        "Highlights panel",
        "Activities",
        "Related lists",
        "Related record"
      ]
    },
    {
      "question": "Properly installing managed packages helps prevent conflicts with customizations made by customers and partners. What functionality should be used to set up packages?",
      "Answer": "D",
      "Options": [
        "Description",
        "Allow sharing",
        "Help setting",
        "Namespace"
      ]
    },
    {
      "question": "After a deal is closed, Cloud Kicks (CK) wants to assign a user as a customer service manager (CSM) in addition to the account owner and would like a new field to easily track and report which CSM is assigned to the Account. Which solution should an app builder use for this request?",
      "Answer": "D",
      "Options": [
        "Multi-select picklist Meld",
        "Picklist field",
        "Text field",
        "Lookup field"
      ]
    },
    {
      "question": "The app builder at Northern Trail Outfitters created a report type for opportunities with or without shipments. The operations team wants to see the account rating Information on the report. What should the app builder do to fulfill this request?",
      "Answer": "C",
      "Options": [
        "Change the primary object of the custom type to the Account object.",
        "Add the Account Rating field to the opportunity record page.",
        "Use add fields related via lookup with the view set to opportunities.",
        "Change the account/opportunity relationship to a master/detail relationship."
      ]
    },
    {
      "question": "Universal Container wants customers to be able to open cases from a public-facing website. What should the app builder use to enable visitors to the website?",
      "Answer": "A",
      "Options": [
        "Web-to-case",
        "Outbound message",
        "Email-to-case",
        "Screen flow"
      ]
    },
    {
      "question": "Ursa Major Solar (UMS) has a custom object where they track Galactic Vendors. The object has four custom fields for the Galactic Vendors's location: The UMS's leadership wants these fields to be concatenated into a single formula field on two lines. Which formula fulfills this requirement?",
      "Answer": "C",
      "Options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ]
    },
    {
      "question": "Universal Containers has Public Read/Write as the Account organization-wide default (OWD) setting. Visitors to the customer community site report that they can see all of the company's account records. How should an app builder configure Account sharing so that community users only see their own Account?",
      "Answer": "C",
      "Options": [
        "Create an account record type for external accounts.",
        "Define a permission set for external accounts.",
        "Set the account external OWD to private.",
        "Define an owner-based sharing rule for external accounts."
      ]
    },
    {
      "question": "Cloud Kicks (CK) increased its Salesforce development efforts so that it now has multiple custom development efforts happening in parallel. CK's developers and admins perform the custom (rations and have complained that working in one sandbox has led to many problems. They requested a solution in which they can work in at least 20 different sandboxes at once, that all start with the same base configuration and data. What should an app builder use to solve the problem?",
      "Answer": "D",
      "Options": [
        "Sandbox refreshes",
        "Full copy sandboxes",
        "Partial copy sandboxes",
        "Sandbox Cloning"
      ]
    },
    {
      "question": "An app builder wants to limit the amount of fields users see when creating a new Opportunity. Once they fill out the required fields and save, the full record page with additional fields relevant to the Opportunity type becomes available. How could this be accomplished?",
      "Answer": "D",
      "Options": [
        "Once the required fields are populated, use a sharing rule to share the new fields with the user.",
        "Use different page layouts for Opportunity types based on the user profile.",
        "Hide additional sections on the page layout and show the users how to manually expand them when they want to fill in the fields in the hidden sections.",
        "Make the Opportunity type a required field on the initial Opportunity page layout and use automation to fill in the type field to update the record type based on the Opportunity type."
      ]
    },
    {
      "question": "At Universal Containers, the VP of Service has requested a visual indicator flag on each case, based on the case priority. High-priority cases should be flagged red, medium-priority should be flagged yellow, and low-priority cases should be flagged green. Which formula would accomplish this requirement? Choose 2 answers",
      "Answer": "CD",
      "Options": [
        "IF(ISPICKVAL(Priority, \"Low\"), \"img/samples/flag_green.gif\", IF(ISPICKVAL(Priority, \"Medium\"), \"img/samples/flag_yellow.gif\", IF(ISPICKVAL(Priority, \"High\"), \"img/samples/flag_red.gif\", \"/s.gif\")))",
        "IMAGE( IF(ISPICKVAL(Priority, \"Low\"), \"img/samples/flag_green.gif\", IF(ISPICKVAL(Priority, \"Medium\"), \"img/samples/flag_yellow.gif\", IF(ISPICKVAL(Priority, \"High\"), \"img/samples/flag_red.gif\"))), \"Priority Flag\")",
        "IMAGE(CASE( Priority, \"Low\", \"img/samples/flag_green.gif\", \"Medium\", \"img/samples/flag_yellow.gif\", \"High\", \"img/samples/flag_red.gif\", \"Priority Flag\")",
        "CASE( Priority, \"Low\", \"img/samples/flag_green.gif\", \"Medium\", \"img/samples/flag_yellow.gif\", \"High\", \"img/samples/flag_red.gif\", \"/s.gif\")"
      ]
    },
    {
      "question": "An app builder at Universal Containers has been asked to add the Chatter feed to a custom object record page. Which approach should the app builder use?",
      "Answer": "A",
      "Options": [
        "Add the standard Chatter feed component.",
        "Add the standard related list component",
        "Add a custom Chatter feed component",
        "Add the Chatter feed component from the AppExchange."
      ]
    },
    {
      "question": "The brokers at DreamHouse Realty (DR) are having an Issue when using the Salesforce mobile app on their (Phones. There are several key fields on the contact record they need access to at a glance. Because of the small screen, they currently have to scroll down the page to view the information. What should the app builder at DR use to configure the Salesforce mobile app to show these key fields at the top of the screen?",
      "Answer": "A",
      "Options": [
        "Compact layout",
        "Record Detail component",
        "Object specific action",
        "Mobile navigation"
      ]
    },
    {
      "question": "A sales rep at AW Computing is unable to find what they are looking for while scrolling through their Chatter feed. How can a filter be utilized to show only posts from their key account and opportunity records?",
      "Answer": "C",
      "Options": [
        "Create a Chatter notification.",
        "Create a Chatter group.",
        "Create a Chatter stream.",
        "Create Chatter bookmarks"
      ]
    },
    {
      "question": "Which two features can be used to allow users to access Flows? Choose 2 answers",
      "Answer": "AC",
      "Options": [
        "Quick Action",
        "Approval Process",
        "Flow Launcher",
        "Apex"
      ]
    },
    {
      "question": "Which two places can an app builder go to see a list of available Custom Lightning components in their org? Choose 2 answers",
      "Answer": "AC",
      "Options": [
        "Lightning App Builder",
        "Lightning component Generator",
        "Lightning components in Setup",
        "Visualforce components in Setup"
      ]
    },
    {
      "question": "Nickname__c is a custom text field on a contact record that is utilized to override the contact's name appearing on an email template. This field is not required and is not always filled in. Which formula should an app builder use to select the contact's preferred name for email communications?",
      "Answer": "D",
      "Options": [
        "IF(NOT(ISBLANK(Nickname__c)), Nickname_c,FirstName)",
        "IF(TEXT(Nfckname__c), Nickname_c,FirstName)",
        "IF (ISNUUL(Nteknarne _..c),Nicknamec,Firstftame)",
        "IF(NOT(BLANKVALUE(Nickname__c)), Nickname__c, FirstName)"
      ]
    },
    {
      "question": "An app builder at Cloud Kicks has been working on changes to a custom Shoe Sales app in a sandbox and is ready to deploy their changes to production with a change set. Part of the work included updates to a permission set. What should the app builder take into consideration when deploying the change set to production?",
      "Answer": "D",
      "Options": [
        "The deployed permission set will only contain changes related to the change set.",
        "Change to field-level security in the permission set will not be applied.",
        "The deployed permission set will manage with the existing permission set.",
        "The existing permission set will be completely overwritten."
      ]
    },
    {
      "question": "A business user wants a quick way to edit a record's status and enter a custom due date field from the record's feed in Salesforce1 Mobile App. What could be used to accomplish this?",
      "Answer": "A",
      "Options": [
        "Custom Action",
        "Custom URL formula field",
        "Custom Button",
        "Custom quick access link"
      ]
    },
    {
      "question": "DreamHouse Realty is building a custom Lightning app to track its expanding solar water collection business. The Lightning app currently contains a custom Lightning record page with standard components. From which two resources should an app builder get custom components to bring into the new Lightning app? Choose 2 answers",
      "Answer": "AD",
      "Options": [
        "AppExchange",
        "Apex Code",
        "Import Wizard",
        "Visualforce"
      ]
    },
    {
      "question": "Ursa Major Solar (UMS) is looking to hire some new employees. UMS wants to allow the same applicant to apply for multiple open positions using a single application. What should an app builder recommend to meet these requirements?",
      "Answer": "D",
      "Options": [
        "Create a master-detail relationship on Open_Position__c to Application__c",
        "Create a master-detail relationship held on Applicant__c to Application__c",
        "Create a master-detailrelationship field on Application__c to Open.Position__c",
        "Create a master-detail relationship field on Applicant__c to Apphcabon_c"
      ]
    },
    {
      "question": "Which validation rule should an app builder use to ensure Pricing_Tier__c is required for customers with a Sales_Organization__c value of Canada?",
      "Answer": "A",
      "Options": [
        "AND(ISPICKVAL(Sales_Organization__c,‘Canada’),ISBLANK(TEXT(Pricing_Tier__c)))",
        "ISPICKVAL(Sales_Organization__c,‘Canada’) && ISNULL(Pricing_Tier__c)",
        "IF(ISNULL(Sales_Organization__c=‘Canada’,ISBLANK(TEXT(Pricing_Tier__c)),TRUE)",
        "OR(ISPICKVAL(Sales_Organization__c,‘Canada’),ISBLANK(TEXT(Pricing_Tier__c)))"
      ]
    },
    {
      "question": "The DreamHouse Realty (DR) service manager has asked for some improvements in case management to enforce process compliance so that cases are unable to be reverted to an earlier case status, and to ensure that certain fields are required when specific case criteria are met. What solution should an app builder implement to meet these requirements?",
      "Answer": "D",
      "Options": [
        "Process Builder",
        "Workflow Rules",
        "Activities Component",
        "A Validation Rules"
      ]
    },
    {
      "question": "Cloud Kicks (CK) wants to simultaneously delete a Suppliere record and all Supplierltem__c records if a partnership ends with a supplier. What solution could an app builder use to meet the requirement? Options",
      "Answer": "D",
      "Options": [
        "Many-to-many",
        "Indirect lookup",
        "Hierarchical",
        "Master-detail"
      ]
    },
    {
      "question": "A recently refreshed partial sandbox at Cloud Kicks has no data in the custom object Shipping. Checking in production, there are two million rows of data in the object. What could be the reason the data is missing?",
      "Answer": "B",
      "Options": [
        "The selected objects in the sandbox template.",
        "The partial sandbox is at capacity.",
        "The sandbox is still populating data.",
        "The sandbox was refreshed too early."
      ]
    },
    {
      "question": "Cloud Kicks recently implemented the application lifecycle management process to its release management strategy. Which category handles bug fixes and simple changes?",
      "Answer": "A",
      "Options": [
        "Patch",
        "Minor",
        "Major",
        "Rollback"
      ]
    },
    {
      "question": "Northern Trail Outfitters wants to initiate a daily backup of its Salesforce org. Which tool should an app builder recommend for this task?",
      "Answer": "D",
      "Options": [
        "Report export",
        "Refresh full copy sandbox",
        "AppExchange package",
        "Data Export Service"
      ]
    },
    {
      "question": "Universal Containers deployed an app in a large change set from a Developer Sandbox to a Developer Pro Sandbox used for testing. After testing, changes had to be made to several of the components in the change set. How should an app builder move the new changes to the Developer Pro Sandbox?",
      "Answer": "C",
      "Options": [
        "Refresh the text sandbox and re_display the change set.",
        "Clone the change set and re_display",
        "Rename the change set, add the changes and re_display",
        "Update the change set and re_display"
      ]
    },
    {
      "question": "An app builder just added a lookup field to Account from the existing custom object, Box. Which report type is automatically created?",
      "Answer": "D",
      "Options": [
        "Boxes with or without Accounts",
        "Accounts with or without Boxes",
        "Boxes with Accounts",
        "Accounts with Boxes"
      ]
    },
    {
      "question": "The app builder at Cloud Kicks has created a custom object named Delivery__c to track the details of products shipped to customers. Which two actions should the app builder take to prevent users in the shipping department from deleting delivery records? Choose 2 answers",
      "Answer": "BD",
      "Options": [
        "Use a permission set to remove the Delete permission.",
        "Remove the Delete permission from the Shipper profile.",
        "Change the organization-wide default of deliveries to Private.",
        "Remove the delete button from the Delivery page layout."
      ]
    },
    {
      "question": "DreamHouse Realty wants to import its property records from an external system into Salesforce. The app builder will use an external ID field to house the property ID from the external system. Which two field types are allowed as an external ID?",
      "Answer": "AC",
      "Options": [
        "Number field",
        "URL field",
        "Test field",
        "Phone field"
      ]
    },
    {
      "question": "DreamHouse Realty is building a custom Lightning app to track its expanding solar water collection business. The Lightning app currently contains a custom Lightning record page with standard components. From which two resources should an app builder get custom components to bring into the new Lightning app? Choose 2 answers",
      "Answer": "AD",
      "Options": [
        "AppExchange",
        "Apex Code",
        "Import Wizard",
        "Visualforce"
      ]
    },
    {
      "question": "Northern Trail Outfitters (NTO) has created the custom objects Trail and Park in Salesforce to track trails and parks respectively. NTO wants to track the total number of trails a park has on the Park record without writing any code. Which two actions should an app builder take to accomplish this requirement?",
      "Answer": "AD",
      "Options": [
        "Use a roll-up summary field on the Park record to show the total number of Trails.",
        "Use a formula field on the Park record to show the total number of trails.",
        "Use a lookup relationship between the Park and Trail objects.",
        "Use a master-detail relationship between the Park and Trail objects."
      ]
    },
    {
      "question": "The VP of Sales at Universal Containers has asked the app builder to let sales reps create opportunity records directly from the account, with a number of fields pre-populated. Which feature should the app builder use to allow users to create the opportunity?",
      "Answer": "A",
      "Options": [
        "A quick action",
        "A default action",
        "A custom button",
        "A custom link"
      ]
    },
    {
      "question": "Universal Containers wants to ensure that they are accepting clean data from their users and verify that important fields are entere What should an app builder recommend to meet this requirement?",
      "Answer": "C",
      "Options": [
        "Update the important fields to be required on the page layout.",
        "Create a Flow to clean any data that is formatted wrong.",
        "Configure a validation to require a field for a specific record type.",
        "Make a formula field to check the format of the important fields."
      ]
    },
    {
      "question": "Universal Containers needs the 18-digit record ID from Opportunity records when exporting data to Excel in order to ensure each record is treated uniquely. What formula should an app builder use to create this new field?",
      "Answer": "C",
      "Options": [
        "TEXT(Id)",
        "ISNUMBER(Id)",
        "CASESAFEID(Id)",
        "VALUE(Id)"
      ]
    },
    {
      "question": "Universal Containers has the Account object's Organization-Wide Default set to Private. The marketing team owns Accounts; however, they also need to be able to see the sales team's Accounts. Both the sales and marketing teams are in completely different branches of the role hierarchy. What feature should be used to enable marketing to see sales-owned accounts?",
      "Answer": "A",
      "Options": [
        "Sharing Rules",
        "Public Group",
        "Workflow"
      ]
    },
    {
      "question": "A custom field on an account is used to track finance information about a customer. Only members of the Finance Team have access to this field. However, the business wants to allow one customer service agent, who is assigned the customer service profile, read-only access to this field for special circumstances. What is the recommended solution to grant the customer service agent access to the field?",
      "Answer": "B",
      "Options": [
        "Update the Customer Service Profile already assigned to the agent to allow for read-only access to the field via Field Level Security.",
        "Create a permission set that allows read-only access to the field via Field Level Security and assign it to the agent.",
        "Create a new profile to allow for read-only access to the field via Field Level Security and assign it to the agent.",
        "Update the custom field's Field Level Security in setup to allow the agent read-only access to the field."
      ]
    },
    {
      "question": "Universal Containers allows all employees to submit reviews for leadership using a custom object. These reviews should only be visible to the HR department and the employee who submitted the review. Which three steps should an app builder take to properly control access to review records? (Choose three.)",
      "Answer": "CDE",
      "Options": [
        "Remove review read permission from non-HR Department user Profiles",
        "Add a Master-Detail(User) field on the Review object",
        "Set Org Wide Default to Private",
        "Disable Grant Access Using Hierarchies",
        "Create a criteria-based Sharing Rule for the HR Department"
      ]
    },
    {
      "question": "Which two report formats can be used as a source report to configure a reporting snapshot? (Choose two.)",
      "Answer": "AD",
      "Options": [
        "Summary format",
        "Joined format",
        "Matrix format",
        "Tabular format"
      ]
    },
    {
      "question": "DreamHouse Realty is rethinking its sandbox utilization strategy after acquiring Cloud Kicks. The Salesforce COE already utilizes a partial and a full sandbox, which it refreshes on their own regular schedules. Teams are expanding and have to begin each of their small projects in a sandbox before committing to the larger pool for collaborative testing while still keeping costs down. What type of sandbox should each team member use?",
      "Answer": "B",
      "Options": [
        "Full sandbox",
        "Developer sandbox",
        "Developer pro sandbox",
        "Partial sandbox"
      ]
    },
    {
      "question": "Universal Containers (UC) tracks Account locations in Zip Code, a custom text field with a validation rule to enforce proper formatting of the US ZIP+4 code for UC’s orders. What formula should the app builder create on Order to display only the first five digits of Zip Code from the parent Account?",
      "Answer": "B",
      "Options": [
        "TEXT(Account.Zip_Code__c, 5)",
        "LEFT(Account.Zip_Code__c, 5)",
        "LPAD(Account.Zip_Code__r, 5)",
        "BEGINS(Account.Zip_Code__r, 5)"
      ]
    },
    {
      "question": "Universal container sales reps can modify fields on an opportunity until it isclosed. Only the sales operations team can modify the post close follow up date andpost close followup comments fields. How to make this happen?",
      "Answer": "C",
      "Options": [
        "Use field-level security to mark fields as read-only on the sales profile",
        "Use field-level security on page layouts to restrict editing fields",
        "Use multiple record types, page layouts, and profiles",
        "Use record types with field sets and restrict editing fields using field-level security"
      ]
    },
    {
      "question": "Cloud Kicks conducts an evaluation of sales reps with a custom object that houses a scorecar The company wants to ensure that only the sales reps, their managers, and their manager ' s executives can view the rep ' s scorecard, but also prevent the Reps from being able to view the executive comment fields on their review. How should these requirements be met?",
      "Answer": "B",
      "Options": [
        "Use a private sharing model granting record access using custom settings; manage field access with record types and page layouts.",
        "Use a private sharing model granting record access using hierarchy; manage field access with field-level security.",
        "Use a private sharing model granting record access using custom settings; manage field access with page layouts and field-level security.",
        "Use a private sharing model granting record access using hierarchy; manage field access with record types and field-level security."
      ]
    },
    {
      "question": "AW Computing has a custom object for service plans. A service plan needs to be associated to one and only one contact. The support manager noticed if the wrong contact is associated, the reps are unable to change the contact. The app builder already confirmed the user has correct access to the field and there are no validations associated with the service plans. What could be causing the issue?",
      "Answer": "B",
      "Options": [
        "The Read Only radio button, Allows users with at least Read access to the Master record to create, edit, or delete related Detail records, is selected.",
        "The Allow reparenting checkbox, Child records can be reparented to other parent records after they are created, is unchecked.",
        "The Read/Write radio button, Allows users with at least Read/Write access to the Master record to create, edit, or delete related Detail records, is selected.",
        "The Allow reparenting checkbox, Child records can be reparented to other parent records after they are created, is checked."
      ]
    },
    {
      "question": "Cloud Kicks wants to set up a new opportunity approval process and execute various action items based on the initial submission. Which three action types should an app builder use in the approval process? Choose 3 answers",
      "Answer": "ABC",
      "Options": [
        "Email Alert",
        "Outbound Message",
        "Task",
        "Invocable Flow",
        "Invocable Process Builder"
      ]
    },
    {
      "question": "Due to the complexity of the Universal Containers sandbox release schedule and requirements, it is advised that change sets are used as often as possible to migrate from one environment to another. Which three common items can an app builder move when using a change set? Choose 3 answers",
      "Answer": "CDE",
      "Options": [
        "Web-to-lead",
        "Standard fields",
        "Custom object",
        "Apex class",
        "Custom field"
      ]
    },
    {
      "question": "An app builder installed a custom Lightning component from AppExchange. What should be done next in order to configure the component for use in a record page?",
      "Answer": "B",
      "Options": [
        "Edit a record page using the Page Layout editor > Drag the Visualforce component onto the page.",
        "Edit a record page using Lightning App Builder > Drag the component onto the page.",
        "Edit a record page using App Manager > Drag the component onto the page.",
        "Edit a record page using the Page Layout editor > Drag the component onto the page."
      ]
    },
    {
      "question": "An app builder has a custom component they want to make available on the utility bar, but the component is unavailable. How should the component be tagged?",
      "Answer": "C",
      "Options": [
        "For use in App Manager.",
        "For use on record pages.",
        "For use on the utility bar.",
        "For use in Lightning App Builder."
      ]
    },
    {
      "question": "Universal Containers has deployed custom tabs to Production via change sets, without including the profile settings. What statement is true about the visibility of custom tabs in Enterprise Edition?",
      "Answer": "A",
      "Options": [
        "Custom tabs are not deployed.",
        "Custom tabs are default on for all users.",
        "Custom tabs are not hidden for all users.",
        "Custom tabs are default off for all users."
      ]
    },
    {
      "question": "Universal Containers expects impacts to operations due to increased demand. The executive team will reach out to current customers and wants to see the number of open cases for the account and parent account. What should an app builder use to display the number of open cases on the account page?",
      "Answer": "C",
      "Options": [
        "Flow",
        "Approval Process",
        "Roll-up summary",
        "Custom object"
      ]
    },
    {
      "question": "DreamHouseRealty (DR) is expanding into subsidized housing by partnering with local government entitles. DR uses Sales Cloud and has enabled field history tracking on the Opportunity object. Due to increased Information requirements, the App Dev team is changing Text Area (Long) fields to Rich Text fields to allow for up to 1,000 characters and better descriptions. Which two considerations should be made by the team? Choose 2 answers",
      "Answer": "BC",
      "Options": [
        "Rich text field values of all lengths are displayed fully in reports.",
        "Data loss may occur when changing custom field types.",
        "Field History Tracking records value changes of 255 characters or less.",
        "Audit Trail is available through REST API extracts."
      ]
    },
    {
      "question": "Service Agents are required to confirm a user's identity before providing support information over the phone. What feature can an app builder use to help agents meet this requirement?",
      "Answer": "C",
      "Options": [
        "Add Path to the top of the Case layout.",
        "Include Surveys as a Case related list.",
        "Guided Action Flows on the record page.",
        "Case validation rules"
      ]
    },
    {
      "question": "Universal Containers wants users to have access to the pricing guidelines document when viewing a Contract related to an Account. What feature should an app builder use to create easy access to the document?",
      "Answer": "D",
      "Options": [
        "Quick Action on the Contracts object",
        "Quick Action on the Account object",
        "A custom detail page link on the Account object",
        "A custom detail page link on the Contract object"
      ]
    },
    {
      "question": "Universal Containers wants to collaborate with its customers within Salesforce, and has decided to enable the Allow Customer Invitations Chatter Setting. What permission is granted to Customers when invited to a Chatter Group?",
      "Answer": "B",
      "Options": [
        "The ability to @mention accounts of which they are a contact.",
        "The ability to interact with members of their groups.",
        "The ability to request access to public groups.",
        "The ability to invite members to groups of which they are a member."
      ]
    },
    {
      "question": "Universal Containers created a custom object called Component to capture details about products sold. What approach should an app builder take to show Component as a related list on Product?",
      "Answer": "B",
      "Options": [
        "Create a master-detail relationship on Product to Component. Add the Component related list to the Product page layout",
        "Create a lookup relationship on Component to Product. Add the Component related list to the Product page layout",
        "Create a junction object to relate Component and Product. Add the Component related list to the Product page layout",
        "Create a roll-up on Product. Add the Component related list to the Product page layout"
      ]
    },
    {
      "question": "Managers at Universal Containers want a quick way to create additional accounts to form a hierarchy from a Parent Account record They want to auto-populate five fields based on the parent to make it easier for users to create the child accounts quickly. What should the app builder recommend?",
      "Answer": "D",
      "Options": [
        "Add Path on Account hierarchy",
        "Add a custom link on Account",
        "Customize a Global Quick Action",
        "Create a custom action"
      ]
    },
    {
      "question": "Universal Containers has a single Contact Lightning record page. A component takes up a lot of room on the page and is NOT needed by users with a Marketing profile. What should the app builder use to solve this Issue?",
      "Answer": "D",
      "Options": [
        "Detail page layouts",
        "AppExchange",
        "Field-level security",
        "Component visibility filter"
      ]
    },
    {
      "question": "Cloud Kicks (CK) wants to track orders against inventory, ensuring its ability to fulfill order requests. CK created a junction object called Request Inventory to enable many-to-many relationships with the Inventory and Order objects. What does the app builder need to provide to ensure users can view Request Inventory records?",
      "Answer": "C",
      "Options": [
        "Apex-based sharing on the first master object.",
        "Read access to the first master object.",
        "Read access to both master objects.",
        "Sharing rules on Request Inventory object."
      ]
    },
    {
      "question": "Cloud Kicks Is redefining its entire business process to convert the Manager Notes field from a long text area files. The goal is to encourage managers to be more concise In their comments and stay at 255 characters or less. There is preexisting information In the Manager Notes field that often is well beyond the character limit. What would happen to any existing information if the app builder tries to convert a preexisting long text area field to text area'",
      "Answer": "A",
      "Options": [
        "Preexisting information will truncate to the first 255 characters.",
        "Preexisting Information in the field will be completely lost.",
        "Preexisting information will remain even if it was over 255 characters.",
        "Preexisting information will cause an error message to pop up."
      ]
    },
    {
      "question": "A user is unable to use inline editing on a list view. A quick check verifies the user should be able to perform inline editing as they have been Assigned the appropriate permissions. Which condition should the app builder review?",
      "Answer": "B",
      "Options": [
        "If the list view selected is locked by another user",
        "If the list view restricts sharing for the user",
        "If the list view contains a chart created by the user",
        "If the list view contains more than one record type"
      ]
    },
    {
      "question": "An app builder needs a custom solution and is considering using either AppExchange or their local developer community. The app builder wants to minimize the need for manual maintenance. What should the app builder consider?",
      "Answer": "C",
      "Options": [
        "An unmanaged package from AppExchange",
        "An open-source custom development",
        "A managed package from AppExchange",
        "An open-source unmanaged package"
      ]
    },
    {
      "question": "Cloud Kicks wants to display 10 key fields at once in a separate section at the top of opportunity records on the desktop. Which component should an app builder add to the record page to enable this functionality?",
      "Answer": "C",
      "Options": [
        "Accordion",
        "Custom Lightning Web Component",
        "Highlights Panel",
        "Path"
      ]
    },
    {
      "question": "Sales reps at Cloud Kicks (CK) forget to submit for approval when CK needs orders reviewed before close won. CK wants to automatically submit opportunities into the Secure Commitment Stage to eliminatemanual submission. Which three features would meet the business requirements? Choose 3 answers",
      "Answer": "BCE",
      "Options": [
        "Workflow",
        "Process Builder",
        "Apex",
        "Chatter action",
        "Flow"
      ]
    },
    {
      "question": "Cloud Kicks wants to make sure that users without the Marketing role are unable to update the Contact Retail Opt In picklist field to Yes. What validation rule would an app builder use to prevent other users from making this update?",
      "Answer": "A",
      "Options": [
        "AND( $UserRole.Name != 'Marketing',ISCHANGED(Retail_Opt_In__c), ISPICKVAL(Retail_0pt_In_c,\"Yes\") )",
        "AND( $UserRole.Name != 'Marketing', Retail_Opt_In_c = \"Yes\" )",
        "AND( $UserRole.Name = 'Marketing', ISPICKVAL(Retail_Opt_In_c,\"Yes\") )",
        "AND( $UserRole.Name = 'Marketing', Retail_Opt_In__c= \"Yes\" )"
      ]
    },
    {
      "question": "An app builder is creating a custom object called Testimonial__c and wants to connect Testimonial__c records with both the submitter's Contact record and Account record. If the Account is deleted, the Testimonial__c should also be deleted. If the Contact is deleted, but the Account remains, the Testimonial__c should remain. How should this be accomplished?",
      "Answer": "B",
      "Options": [
        "Create a lookup relationship from Testimonial__c to Account and a master-detail relationship from Testimonial__c to Contact.",
        "Create a master-detail relationship from Testimonial__c to Account and a lookup relationship from Testimonial__c to Contact.",
        "Make Testimonial_c a junction object between Account and Contact using master-detail relationships.",
        "Make both the Contact and Account fields required on the Testimonial__c object and create lookup relationships from Testimonia"
      ]
    },
    {
      "question": "Universal Containers wants to test code against a subset of production data that is under 5 GB. Additionally, Universal Containers wants to refresh this sandbox every weekend. What type of sandbox should be used to accomplish this?",
      "Answer": "D",
      "Options": [
        "Developer Pro",
        "Developer",
        "Full",
        "Partial Copy"
      ]
    },
    {
      "question": "Cloud Kicks (CK) wants to quickly insert a list of over 1 million net new Accounts. The template based on CK ' s data model was used to populate The list. Which tool should be used?",
      "Answer": "A",
      "Options": [
        "Data Loader",
        "Import Wizard",
        "Schema Builder",
        "Lightning Object Creator"
      ]
    },
    {
      "question": "Sales Managers want to be automatically notified any time there is a change to an Opportunity Close Date and want these changes to be tracked on the Opportunity. Which two configurations should an app builder recommend? (Choose two.)",
      "Answer": "BD",
      "Options": [
        "Activate Historical Trending for Opportunities",
        "Use Process Builder on Opportunities and a Chatter post action",
        "Create an Opportunity outbound message",
        "Enable Feed Tracking on Opportunities"
      ]
    },
    {
      "question": "A Cloud Kicks employee submitted an opportunity for approval by their manager. What would happen if the employee attempts to edit the description field after submission?",
      "Answer": "C",
      "Options": [
        "User will see the record is now owned by their manager.",
        "User will be able to edit the description field only.",
        "User will be presented with a 'Record Lock' notification.",
        "User will be able to edit the name, but unable to edit the description."
      ]
    },
    {
      "question": "Ursa Major Solar wants to automate a welcome email to new clients and include a customized survey about their buying experience. An app builder is tasked with this project and has very little time to build the solution from scratch, but still needs to be able to fully customize the solution. What should the app builder do to meet the deadline and custom requirements?",
      "Answer": "B",
      "Options": [
        "Work with a developer to create custom Apex code and a Lightning web component survey to meet the criteria,",
        "Use Salesforce flow to build the survey declaratively to meet the criteria and send it to the customer as an email.",
        "Choose a managed package from AppExchange that closely meets the requirements of the project, restricts programmatic development, but allows declarative development",
        "Choose an unmanaged package from Appexchange that closely meets the requirements of the project and allows programmatic development."
      ]
    },
    {
      "question": "When an opportunity is closed date is pushed more than 30 days, manager approval is required. An approval process is in place but reps frequently forget to submit for approval to run the process. How can an app builder ensure that these opportunities are submitted into the approval process?",
      "Answer": "D",
      "Options": [
        "Use a validation rule and an email alert to the manager requesting approval",
        "Change the entry criteria on the approval process to criteria are met and lock the record on initial submission",
        "Give the manager the \"API Enabled\" permission to permit approval responses by email",
        "Submit the record for approval from an automated process"
      ]
    },
    {
      "question": "What are the limitations of Schema Builder when creating a custom object?",
      "Answer": "A",
      "Options": [
        "Fields and relationships can be created, but they will be unable to add the fields to the page layout from the canvas.",
        "Custom fields can be added to any custom objects, excluding formula field types.",
        "Relationships can be made to any custom objects, but any relationships to standard objects should be built in Lightning Object Manager.",
        "\" Save \" should be clicked each time a new object, field, or relationship is create"
      ]
    },
    {
      "question": "Universal Containers is setting up Salesforce for the first time. Management wants the sales and marketing teams to have different navigation menus in the Salesforce Mobile App. What option is available to an app builder to satisfy this requirement?",
      "Answer": "B",
      "Options": [
        "Create sales and marketing profiles and ensure read access to different objects.",
        "Create mobile navigation menus for both the sales and marketing profiles.",
        "Create public groups for sales and marketing and create mobile navigation menus for each group.",
        "Create roles for sales and marketing and assign a custom homepage layout for each role."
      ]
    },
    {
      "question": "Ursa Major Solar wants to provide sales console users with an incredible experience, with the most-used components easily accessible at all times. What solution can enable reps to see and access these components from anywhere within the app without leaving the page where the team is working?",
      "Answer": "C",
      "Options": [
        "Home page",
        "Favorites",
        "Utility bar",
        "Global actions"
      ]
    },
    {
      "question": "An app builder at Northern Trail Outfitters created a sandbox template for Accounts, Projects, and Project Milestones to reconfigure some flows for the project management app. Which type of testing environment should the app builder create?",
      "Answer": "A",
      "Options": [
        "Partial Copy",
        "Developer",
        "Developer Pro",
        "Scratch Org"
      ]
    },
    {
      "question": "A new field has been added to the Applicant object. A recruiter ran the \"Position with or without Applicants\" report and noticed that the new field was missing as an option to add as a column. How should an app builder troubleshoot this issue?",
      "Answer": "C",
      "Options": [
        "Check \"Allow Reports\" for the position and applicant objects",
        "Adjust the field level security to include in the report type",
        "Add the field to the custom report type field layout",
        "Update the profile with the \"Manage Public Reports\" permission"
      ]
    },
    {
      "question": "Universal Containers (UC) has large data volumes and is nearing data storage limits. The planned solution is to archive historical data to reduce data storage in Salesforce; however, UC would still like to use reports, queries, and lookups on the archived information. Which two options could meet this requirement? (Choose two.)",
      "Answer": "BD",
      "Options": [
        "Custom objects",
        "External objects",
        "Big objects",
        "Related objects"
      ]
    },
    {
      "question": "DreamHouse Realty (DR) employees started using company-owned airplanes for work travel after Ursa Major Solar was acquired. DR executives want to automate the submission travel request forms to enforce the Internal policy. How should an app builder automate travel requests based on these criteria?",
      "Answer": "C",
      "Options": [
        "Process Builder",
        "Workflow rule",
        "Approval process",
        "Apex"
      ]
    },
    {
      "question": "The Director of customer service wants to receive a notification when a case stays in the '' new'' status for more than four business hours. Which two automation processes should be used to accomplish this? Choose 2 answers",
      "Answer": "AC",
      "Options": [
        "Flow Builder",
        "Process Builder",
        "Escalation rules",
        "Scheduled Apex"
      ]
    },
    {
      "question": "The app builder at Ursa Major Solar has just created a master-detail relationship between a parent object Galaxy__c and child object Star__c. What would be the effect of creating this type of relationship if users want to report on Galaxy__c with Star__c?",
      "Answer": "C",
      "Options": [
        "A new custom report type will need to be created for Galaxy__c with Star__c.",
        "A Star__c report type with Galaxy__c as a field will be automatically created.",
        "A Galaxy__c with Star__c report type will be automatically created.",
        "A new custom report type will need to be created for Star__c with lookup fields from Galaxy__c."
      ]
    },
    {
      "question": "After utilizing the Lightning Object Creator to create a new object, its fields, and to insert all of the data, an app builder now needs to set up the Lightning Record Page. Which component should the app builder have on their Lightning Record Page to see all of the fields from the page layout?",
      "Answer": "C",
      "Options": [
        "Highlights Panel",
        "Recommendations",
        "Record Detail",
        "Path"
      ]
    },
    {
      "question": "Cloud Kicks (CK) switched to Lightning Experience and started using Chatter across its global workforce to support its fast-paced sales cycle. CK loves Chatter but struggle with gathering feedback from core team members, including understanding who is available to respond. Which two ways could CK use Chatter to solve this problem? (Choose two.)",
      "Answer": "AC",
      "Options": [
        "Out of Office",
        "Topics",
        "Polls",
        "Streams"
      ]
    },
    {
      "question": "A new field is being created on a custom object .however the app builder does not want the field to up on pre existing customer report types. what should the app builder do on the custom field setup to fullfill this requirment?",
      "Answer": "C",
      "Options": [
        "Remove new field from all page layouts.",
        "Remove visibility to all report profiles.",
        "Deselect auto add to custom report type",
        "Grant read only access to all report profiles."
      ]
    },
    {
      "question": "Cloud Kicks has a sales rep who is stating that their Contact is unavailable for other users to see within Salesforce. In which three ways can an app builder troubleshoot this issue?",
      "Answer": "CDE",
      "Options": [
        "Create a new Contact and have the users try again.",
        "Create an Account Sharing Rule to give the users access to all records.",
        "Confirm whether Default Organization-Wide Sharing Settings provide access to the Account.",
        "Verify the users with the issue have access to the Contact object.",
        "Review the Contact record and ensure it is linked to an Account."
      ]
    },
    {
      "question": "Ursa Major Solar's service department gets requests for several types of services, such as installation, repair, and maintenance. Service managers need to be able to tell when maintenance was last done on an asset to help determine if they are meeting contract agreements, but the last maintenance date can be difficult to determine when there are many work orders related to the asset. They think it would be helpful to have a field auto-populated on the Asset record when a maintenance work order gets closed. Which tool should an app builder recommend to help meet this requirement?",
      "Answer": "D",
      "Options": [
        "Einstein Next Best Action",
        "Roll-up Summary",
        "Apex Trigger",
        "Flow"
      ]
    },
    {
      "question": "At Ursa Major Solar, there is a single Lightning record page for the Celestial Bodies custom object; however, there is a Lightning component the app builder wants to restrict to mobile app users. Which feature in the Lightning app builder should be utilized?",
      "Answer": "C",
      "Options": [
        "Highlights panel",
        "Chatter feed",
        "Component visibly filter",
        "Related list quick links"
      ]
    },
    {
      "question": "Cloud Kicks wants to know the total value of all won Opportunities for Accounts and display it on the record. What type of summary should the app builder use in the roll-up summary field?",
      "Answer": "C",
      "Options": [
        "Max",
        "Count",
        "Min",
        "Sum"
      ]
    },
    {
      "question": "An app builder installs an unmanaged package in a full copy sandbox that is an exact match for production, and now they are ready to install it in production. When the app builder attempts to install the package in production, it fails. Why did the package fail to install?",
      "Answer": "D",
      "Options": [
        "Package features not compatible",
        "Incorrect license types",
        "Object limits exceeded",
        "Apex unit test failures"
      ]
    },
    {
      "question": "DreamHouse Realty wants to make sure an Opportunity has a field Expected_Close_Date?c populated before it is allowed to enter the qualified stage. How should an app builder solution this request?",
      "Answer": "C",
      "Options": [
        "Record Type",
        "Activity History",
        "Validation Rule",
        "Page Layout"
      ]
    },
    {
      "question": "An app builder wants to create a formula field on an Account to include data from related Contacts but is unable to find the relationship in the formula editor. What is a limitation of formulas that could be causing the issue?",
      "Answer": "D",
      "Options": [
        "More than 5,000 characters in the formula.",
        "Contact and Account objects DO NOT have a Master-Detail Relationship.",
        "Formula field limit reached on the Account object.",
        "Unable to reference the child records."
      ]
    },
    {
      "question": "An app builder is loading data into Salesforce. To link new records back to the legacy system, a field will be used to track the legacy ID on the Account object. For future data loads this ID will be used when upserting records. Which two fields attributes should be selected? (Choose two.)",
      "Answer": "AD",
      "Options": [
        "External ID",
        "Text (encrypted)",
        "Required",
        "Unique"
      ]
    },
    {
      "question": "Universal Containers wants to understand return on investment for the latest advertising buy. They currently use a private security model for all objects. What should an app builder recommend?",
      "Answer": "D",
      "Options": [
        "Utilize Account Hierarchies and Roil-Up Summary fields",
        "Run an opportunities pipeline report",
        "Change to a public security model",
        "Configure Campaign Hierarchies and Campaign statistics"
      ]
    },
    {
      "question": "Cloud Kicks has a custom object with a private sharing setting. The business wants to share individual records with specific people or departments on a case-by-case basis. Which three options does the business user have to manually share individual records? (Choose three.)",
      "Answer": "ADE",
      "Options": [
        "Users",
        "Private Groups",
        "Permission Set Groups",
        "Public Groups",
        "Roles and Subordinates"
      ]
    },
    {
      "question": "Universal Containers (UC) has several large customers that sell their products through dealers. UC identifies and works with a single individual at each customer and at each dealer. Separate bills are sent to each customer and each dealer. These details need to be stored in a format that clearly displays the business entities and their appropriate representatives. How should an app builder Implement these regalements?",
      "Answer": "D",
      "Options": [
        "Create a single parent record, add each rep as a contact to the parent account and add each dealer as a child record.",
        "Create both customer and dealer as accounts, create account teams on each account and associate the dealer records with the parent account.",
        "Create a single account record, add each rep as a contact and create a custom dealer object.",
        "Create both customer and dealer as accounts, add each rep as a contact on the corresponding account and create an account hierarchy."
      ]
    },
    {
      "question": "Ursa Major Solar wants to create a relationship between the standard Contact object and a custom Solar Project object. Contact s can potentially be related to multiple Solar Project objects, and a Solar Project can have multiple Contacts associated with it. How should an app builder configure the data model?",
      "Answer": "B",
      "Options": [
        "One Master-detail relationship on Contact and one Master-detail relationship on Solar Project",
        "Two Master-detail relationships on a new custom object",
        "One Lookup relationship on Contact and one Lookup relationship on Solar Project",
        "Two Lookup relationships on a new custom object"
      ]
    },
    {
      "question": "Ursa Major Solar (UMS) uses a public sharing model for accounts. UMS would like to move to a more restrictive sharing model but wants the Sales team to continue to have access to all account records with the sales record type. Which two actions should an app builder complete to implement this change?",
      "Answer": "BC",
      "Options": [
        "Update the Sales profile.",
        "Update the organization-wide defaults",
        "Create a criteria-based sharing rule.",
        "Create an owner-based sharing rule."
      ]
    },
    {
      "question": "An app builder wants to create a new field using Schema Builder. Who will get access to the new field by default?",
      "Answer": "A",
      "Options": [
        "Internal profiles",
        "All profiles",
        "Standard profiles",
        "No profiles"
      ]
    },
    {
      "question": "Universal Containers has created two custom objects called Seminars and Attendees. Organization-wide defaults for those objects have been set to private. Universal Containers wants to set up a new junction object between these objects. A select group of users should be able to edit records in the junction object. Which two steps should an app builder take to configure the proper security? A . Create an owner-based sharing rule that gives Read access to the junction object. B . Set Sharing Settings to Read Only on both master-detail relationship fields. C . Set lookup filters on both junction object relationship fields.",
      "Answer": "BD",
      "Options": [
        "Create an owner-based sharing rule that gives Read access to the junction object.",
        "Set Sharing Settings to Read Only on both master-detail relationship fields.",
        "Set lookup filters on both junction object relationship fields.",
        "Create owner-based sharing rules that give Read access to the master objects."
      ]
    },
    {
      "question": "Sales managers at Cloud Kicks would like to standardize what information sales reps are gathering. Sales reps want recommendations, sales strategies and to know what key fields need to be completed at each step of the sales process on the opportunity record. Which feature should an app builder use to provide this functionality?",
      "Answer": "A",
      "Options": [
        "Path",
        "Other Red",
        "Approval Process",
        "Global Action"
      ]
    },
    {
      "question": "The Service Manager provided the app builder with color code requirements for case age on open cases. New cases populate a green circle Day-old cases populate a yellow circle Three day-old cases populate a red circle How should an app builder implement this requirement?",
      "Answer": "D",
      "Options": [
        "Lightning Web Component",
        "Quick Action",
        "Custom Button",
        "Formula Field"
      ]
    },
    {
      "question": "Ursa Major Solar wants to see the Type field from the parent object Galaxy listed on the child recordStar. The app builder is receiving an error stating \"Picklist values are only supported in certain functions\". What formula should an app builder use to achieve the desired result?",
      "Answer": "C",
      "Options": [
        "ISPICKVAL(Galaxy__r.Type__c)",
        "VALUE(Galaxy_r.Type__c)",
        "TEXT(Galaxy_r.Type_c)",
        "FIND(Galaxy__r.Type__c)"
      ]
    },
    {
      "question": "Universal Containers require different fields to be filled out at each stage of the Opportunity sales process. What configuration steps can an app builder use to meet this requirement?",
      "Answer": "D",
      "Options": [
        "Define record types and page layouts for each stage",
        "Set page layout required fields based on the current stage",
        "Create a Process Builder to prompt the User for field information",
        "Add the Path component to the Lightning record page"
      ]
    },
    {
      "question": "An app builder has created a custom Lightning App and wants to make it available to the internal users at Universal Containers. Which two steps are necessary to accomplish this task? (Choose two.)",
      "Answer": "AB",
      "Options": [
        "Build a Custom Tab for the app",
        "Create a subdomain using My Domain",
        "Upload the app to Static Resources",
        "Create a Visualforce page"
      ]
    },
    {
      "question": "Universal Containers uses a custom picklist called Account_Region__c on the Account object. The vice president of sales has asked that the value of this field is visible on Opportunities. How should an app builder create this solution?",
      "Answer": "D",
      "Options": [
        "Lookup field",
        "Field-level security",
        "Field history tacking",
        "Cross-object formula field"
      ]
    },
    {
      "question": "Cloud Kicks (CK) has a formula field `specialty ` or Opportunity that gets its value from the `specialty ` field on the related Account. CK has changed its processes to allow opportunities to have different values for `Specialty ` than their Account. How can sales reps enter values for the `specialty ` field on Opportunity, while preserving the values on existing opportunities?",
      "Answer": "D",
      "Options": [
        "Extent the data, convert the field to `GETTING` and mount the data.",
        "Convert the field to a text field and the values in the left.",
        "Create a new text field and keep using the existing formula field.",
        "Create a new text field and import the formula field values in it."
      ]
    },
    {
      "question": "Cloud Kicks has five years of sales data and would like to track when customers made their first purchase. How should an app builder use a roll-up summary to meet the requirements?",
      "Answer": "B",
      "Options": [
        "Create a new date field called First Order Date, create a new Workflow to set the date, and roll up the value with a filter where IsWon = TRUE.",
        "Create a new roll-up summary field called First Order Date, using Type MIN on the Opportunity Close Date with a filter where IsWon = TRUE.",
        "Create a new roll-up summary field called First Order Date, using Type SUM on Opportunity Close Date.",
        "Create a new date field called First Order Date, then create a roll-up summary to update the field using Type MIN."
      ]
    },
    {
      "question": "Cloud Kicks (CK) captures all shipping information in a custom object called Shipments__c. CK's app builder is tasked with creating an approval process to ensure department members can approve all overnight shipments. Where should the app builder route the approval request?",
      "Answer": "B",
      "Options": [
        "Public group",
        "Queue",
        "Hierarchy field",
        "Role"
      ]
    },
    {
      "question": "An app builder needs to create new automation on an object. What best practice should the app builder follow when building out automation7",
      "Answer": "A",
      "Options": [
        "One Flow per object.",
        "One record change process per object.",
        "One invocable process per object.",
        "One Workflow rule per object."
      ]
    },
    {
      "question": "Universal Containers has purchased a Lightning Component on the AppExchange. Where can that component be utilized. Choose 2 answers",
      "Answer": "AC",
      "Options": [
        "Standalone Lightning App",
        "Visual Workflow",
        "Salesforce1 Mobile App",
        "Lightning Process Builder"
      ]
    },
    {
      "question": "Universal Containers have changes that need to be deployed from Sandbox to Production. Where should an app builder look to verify that a Change Set can be deployed?",
      "Answer": "C",
      "Options": [
        "Deployment Settings",
        "Inbound Change Sets",
        "Deployment Status",
        "Inbound Change Sets"
      ]
    },
    {
      "question": "Sales representatives want to capture custom Feedback record details related to each Account. The sales reps want to accomplish this with minimal clicks on the Salesforce1 mobile application. What is the recommended solution to meet this requirement? Choose 2 answers.",
      "Answer": "BD",
      "Options": [
        "Create predefined values for most of the fields.",
        "Create a global action on Account.",
        "Create a feedback object as a parent of Account",
        "Create an object-specific action on Account"
      ]
    },
    {
      "question": "A manager built out a new Account report and wants to add a chart of the data to account records. An app builder tried to use the Report Chart component but was unable to find the manager's report. What are two reasons the app builder is unable to see the report? (Choose two.)",
      "Answer": "CD",
      "Options": [
        "The app builder did not create the report.",
        "The report does not have a chart.",
        "The report has no data in it.",
        "The report is in the manager's Private Reports folder"
      ]
    },
    {
      "question": "The Cloud Kicks (CK) sales team is currently using a sales app in Lightning Experience. CK is planning a Salesforce mobile app rollout next month to increase productivity for reps while out in the field. After reviewing the mobile app, the sales operations manager asks about ways to create an enhanced user experience. Which two solutions could an app builder suggest? Choose 2 answers",
      "Answer": "BD",
      "Options": [
        "Allow mobile users to support Account Upstream Agent Closets.",
        "Include Today as a guide from in line size.",
        "Set up different mobile menu configurations of different types of users.",
        "Create a custom app page and Assign to the mobile menu."
      ]
    },
    {
      "question": "On the Account Lightning record page, users need to see ten fields and the ability to sort and wrap text on their Related Lists. What Related List type would the app builder select for the Related List Lightning component?",
      "Answer": "D",
      "Options": [
        "Basic List",
        "ListVlew",
        "List Class",
        "Enhanced List"
      ]
    },
    {
      "question": "The app builder at AW Computing needs to capture information about sales rep help requests for sales engineering. Some Opportunities are more complex and require many different requests for help. Additionally, the date of the most recent request should be displayed on the Opportunity page. What should the app builder use to accomplish this?",
      "Answer": "C",
      "Options": [
        "Opportunity with Master-detail field to custom object",
        "Custom object with Lookup field to Opportunity",
        "Custom object with Master-detail field to Opportunity",
        "Opportunity with Lookup field to custom object"
      ]
    },
    {
      "question": "Which two solutions prevent a formula field from being referenced by a Roll-Up Summary field?",
      "Answer": "AD",
      "Options": [
        "The NOW() function in the formula field",
        "A cross-object formula updating a field referenced by the formula field",
        "The CASE() function in the formula field",
        "A cross-object field referenced in the formula field"
      ]
    },
    {
      "question": "An app builder wants to use Process Builder to automate some of the work being done by the sales team. What are three capabilities of Process Builder that can improve productivity?",
      "Answer": "BCD",
      "Options": [
        "Delete a related record.",
        "Update a related record.",
        "Create a child record.",
        "Send an email alert.",
        "Send an outbound message."
      ]
    },
    {
      "question": "Ursa Major Solar has received complaints about inconsistent customer service experiences and wants to provide its agents with a checklist of items that must be accomplished when servicing a case. What should an app builder use to implement this?",
      "Answer": "A",
      "Options": [
        "Actions & Recommendations component",
        "Highlights Panel component",
        "Activity Timeline component",
        "Assistant component"
      ]
    },
    {
      "question": "A Service Coordinator (SC) for Ursa Major Solar (UMS) does a final review of work orders owned by a technician for a specific region before the records are submitted for an invoice. Before closing out the work order, the SC needs to modify data or remove attachments that were added by mistake. The SC also needs access to any other related records owned by the technician. What solution would provide the required access, given a private data model?",
      "Answer": "C",
      "Options": [
        "Create a workflow rule that updates records owned by technicians in that region with the SC.",
        "Give the SC a permission set with the Modify All Data system permission.",
        "Put the SC in the role hierarchy above the technicians whose work orders they review.",
        "Change work order access on the SC's profile to 'Modify AIl."
      ]
    },
    {
      "question": "The CFO of Cloud Kicks needs to sign off on any major show retail deal that has a discount of more than 30% before the deal can be closed. What feature would be used to handle this requirement?",
      "Answer": "A",
      "Options": [
        "Approval Process",
        "Workflow Rule",
        "Email Alert",
        "Field Update"
      ]
    },
    {
      "question": "An app builder has created a change set and deployed a report from their development sandbox to a partial sandbox for User Acceptance Testing. When the app builder runs the report, no data is returned. What can be a reason for this?",
      "Answer": "B",
      "Options": [
        "Reports have to be deployed with Salesforce DX.",
        "Data is unable to be deployed with change sets.",
        "Reports have to be manually re-created in each environment.",
        "Data is deployed when added to a change set"
      ]
    },
    {
      "question": "An app builder wants to configure a sandbox environment for users to perform user acceptance testing of the latest features from developers. The sandbox should include about 500MB worth of data configured via a template. Also, the sandbox should be refreshed weekly. Which sandbox meets the requirements?",
      "Answer": "C",
      "Options": [
        "Full sandbox",
        "Developer File sandbox",
        "Partial Copy sandbox",
        "Developer sandbox"
      ]
    },
    {
      "question": "Ursa Major Solar wants to convert the relationship between Galaxy and Star from a lookup relationship to a master-detail relationship so each Galaxy record can be equipped with a roll-up summary count of Star records. Which two considerations should be made?",
      "Answer": "AB",
      "Options": [
        "The Star records are all required to have an existing value in their Galaxy field.",
        "The Galaxy object has fewer than two existing master-detail relationships.",
        "The Galaxy object is required to contain existing roll-up summary fields.",
        "The Star object has fewer than two existing master-detail relationships."
      ]
    },
    {
      "question": "At AW Computing, the Candidate object has a checkbox field for Previous Experience and a number field for Years of Previous Experience. The Recruiting team would like the number field to display only if the Previous Experience field is checked. Which functionality should the app builder use to meet this requirement?",
      "Answer": "A",
      "Options": [
        "Use Dynamic Forms to display the Years of Previous Experience field if Previous Experience is checked.",
        "Create a dependency between the Previous Experience and Years of Previous Experience fields.",
        "Create two different page layouts and a process to change the Inyout if Previous Experience is checked.",
        "Use a Visualforce component on the candidate page layout to conditionally display the fields."
      ]
    },
    {
      "question": "A sales manager at Cloud Kicks wants the team to spend more time in the field and less time manually entering the information found on the business cards they collect. What should an app builder do to help achieve this goal without sacrificing data quality?",
      "Answer": "A",
      "Options": [
        "Research and evaluate data enrichment products on the AppExchange to automate data entry.",
        "Use Flow to create a data entry wizard to automate data entry.",
        "Use a combination of workflow rules and formula fields to populate key fields for the sales user.",
        "Post daily to the Chatter feed any relevant fields that need to be populated."
      ]
    },
    {
      "question": "The Training team at UVC uses a custom Training object to track their customer trainings. An App Builder needs to create a relationship between the Training object and the related Student's record. A private sharing model is in place for both Students and Training. Which two statements are true when creating a Student lookup field on the Training object? Choose 2 answers",
      "Answer": "AD",
      "Options": [
        "On Training record, the Student Lookup field can be made optional",
        "On Student Record, users can set up Roll-up summary fields on Training records",
        "Cross-object field updates between Training and Student records are not supported",
        "On Training record, users can only delete students, if they have access to it"
      ]
    },
    {
      "question": "The sales Operations team at AWS Computing deletes accounts for a variety of a reasons. The sales ops director is worried that the Sales team may delete accounts that sales reps are actively selling into. Now should the app builder keep accounts with open opportunities from being deleted? ACreate an Apex Trigger on the Account object BCreate a validation rule on the Account object. CRemove the delete button on the account layout DRemove the Delete permission from the Sales Rep profile.",
      "Answer": "B",
      "Options": [
        "Create an Apex Trigger on the Account object",
        "Create a validation rule on the Account object.",
        "Remove the delete button on the account layout",
        "Remove the Delete permission from the Sales Rep profile."
      ]
    },
    {
      "question": "Cloud Kicks (CK) wants to set up a custom child object to track gift cards issued to a customer. A key requirement is to track the total number of gift cards opened and gift cards issued on an Account. CK wants to permanently ensure the gift cards are unable to be moved across any other Account once it is created. On the gift card object, what type of field should be created to support this requirement?",
      "Answer": "D",
      "Options": [
        "Formula",
        "Lookup relationship",
        "Roll-up summary",
        "Master-detail relationship"
      ]
    },
    {
      "question": "An app builder wants to deploy a new version of an auto launched flow production in an active state so that the new functionality is immediately available to users. What should the app builder take into consideration when planning the deployment?",
      "Answer": "C",
      "Options": [
        "Include the profile that access the flow in the deployment",
        "Include the process builder calling the flow in the deployment",
        "Verify there is an apex test that provides test coverage for the flow",
        "Verify there is a static resource that provides test coverage for the flow"
      ]
    },
    {
      "question": "Cloud Kicks has built out a process that is supposed to update record ownership based on several different criteria. Some users are reporting that they are not getting the expected level of access to accounts and contacts. Which two considerations should an app builder be aware of that could be causing the issue? (Choose two.)",
      "Answer": "AB",
      "Options": [
        "Processes that update record owners do not transfer child records.",
        "Processes will fail on records owned by inactive users.",
        "Processes will only run if the most current version is active.",
        "Processes use the first value if the Owner field is updated multiple times."
      ]
    },
    {
      "question": "A new custom object is being created with a private sharing setting. The business wants to share individual records with specific people or group of people on a case by case basis. What options does the business user have to manually share individual records? Choose 3 answers",
      "Answer": "ACE",
      "Options": [
        "Users",
        "Profiles",
        "Public Groups",
        "Permission Sets",
        "Roles"
      ]
    },
    {
      "question": "Ursa Major Solar has a lookup relationship between a custom Galaxy _c object and a custom Star_c object. An app builder wants to create a roll-up summary field that counts the total number of Star_c records related to each Galaxy__c record. How would the current configuration impact the ability to achieve the desired result?",
      "Answer": "D",
      "Options": [
        "A roll-up summary field will need to be created on the Galaxy__c object with a field filter that select all related Star_c records",
        "The roll-up summary can be achieved by creating a formula field on the Star__c object.",
        "The roll-up summary can be achieved by creating a formula field on the Galaxy__c object.",
        "The lookup relationship will need to be converted to a master-detail relationship before a roll-up summary field can be created."
      ]
    },
    {
      "question": "Ursa Major Solar is ramping up the sales team to meet increased demand. As part of the short ramp up for these new reps, the manager wants to provide a help guide to enable reps to easily get help where needed during the different sales processes. Which solution should an app builder recommend?",
      "Answer": "B",
      "Options": [
        "Journey Builder",
        "Path",
        "Flow",
        "Chatter Publisher"
      ]
    }
  ],
  "Admin": [
    {
      "question": "Which of the following are standard Salesforce objects?",
      "Answer": "ABC",
      "Options": [
        "Account",
        "Contact",
        "Lead",
        "Visualforce"
      ]
    },
    {
      "question": "Which profile is the most powerful in Salesforce?",
      "Answer": "D",
      "Options": [
        "Standard User",
        "Marketing User",
        "Contract Manager",
        "System Administrator"
      ]
    },
    {
      "question": "Which of the following can be customized by a System Administrator?",
      "Answer": "AB",
      "Options": [
        "Page Layouts",
        "Picklist Values",
        "Apex Triggers",
        "Report Formulas"
      ]
    },
    {
      "question": "What controls access to records based on record ownership?",
      "Answer": "A",
      "Options": [
        "Sharing Rules",
        "Permission Sets",
        "Profiles",
        "Login Hours"
      ]
    },
    {
      "question": "Which of the following manage user access in Salesforce?",
      "Answer": "AC",
      "Options": [
        "Permission Sets",
        "Report Types",
        "Profiles",
        "Dashboards"
      ]
    }
  ],
  "Apex Basics": [
    {
      "question": "What is the correct file extension for an Apex class?",
      "Answer": "C",
      "Options": [
        ".js",
        ".c",
        ".cls",
        ".apx"
      ]
    },
    {
      "question": "Which of the following are valid data types in Apex?",
      "Answer": "ABD",
      "Options": [
        "String",
        "Integer",
        "JSON",
        "Decimal"
      ]
    },
    {
      "question": "Which keyword is used to define a constant in Apex?",
      "Answer": "A",
      "Options": [
        "final",
        "const",
        "static",
        "fixed"
      ]
    },
    {
      "question": "Which of the following are used to query records in Apex?",
      "Answer": "AB",
      "Options": [
        "SOQL",
        "SOSL",
        "SQL",
        "QLS"
      ]
    },
    {
      "question": "What exception is thrown when a queried record is not found?",
      "Answer": "A",
      "Options": [
        "QueryException",
        "NullPointerException",
        "NotFoundError",
        "SystemException"
      ]
    }
  ]
};
