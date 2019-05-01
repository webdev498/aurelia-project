
export class DataService {
  constructor() {
    this.webservice = 'http://openorapi.trendsic.com/';
    this.created();
  }
  created() {
    $.ajaxSetup({
      contentType: 'application/json',
      dataType: 'json',
      xhrFields: {
        withCredentials: true
      }
    });
  }
  currentUser() {
    return Promise.resolve(
      $.ajax({
        type: 'GET',
        url: this.webservice + 'v1/CurrentContact'
      })
    );
  }
  login(username, password) {
    return Promise.resolve(
      $.ajax({
        type: 'POST',
        url: this.webservice + 'auth',
        data: JSON.stringify({ Username: username, Password: password })
      })
    );
  }
  logout() {
    return Promise.resolve(
      $.ajax({
        type: 'GET',
        url: this.webservice + 'auth/logout'
      })
    );
  }
  /* Contact Request */
  getContactRequest(contactId) {
    return Promise.resolve(
      $.ajax({
        type: 'GET',
        url: this.webservice + 'v1/Contact/' + contactId
      })
    );
  }
  deleteContactRequest(contactId) {
    return Promise.resolve(
      $.ajax({
        type: 'DELETE',
        url: this.webservice + 'v1/Contact/' + contactId
      })
    );
  }
  createContactRequest(contact) {
    return Promise.resolve(
      $.ajax({
        type: 'POST',
        data: contact,
        url: this.webservice + 'v1/Contact'
      })
    );
  }
  updateContactRequest(contactId, contact) {
    return Promise.resolve(
      $.ajax({
        type: 'PUT',
        data: contact,
        url: this.webservice + 'v1/Contact/' + contactId
      })
    );
  }

  /* Contact Type Request */
  getContactTypeRequest(contactTypeId) {
    return Promise.resolve(
      $.ajax({
        type: 'GET',
        url: this.webservice + 'v1/ContactType/' + contactTypeId
      })
    );
  }
  getAllContactTypeRequests() {
    return Promise.resolve(
      $.ajax({
        type: 'GET',
        url: this.webservice + 'v1/ContactType'
      })
    );
  }
  deleteContactTypeRequest(contactTypeId) {
    return Promise.resolve(
      $.ajax({
        type: 'DELETE',
        url: this.webservice + 'v1/ContactType/' + contactTypeId
      })
    );
  }
  createContactTypeRequest(contactType) {
    return Promise.resolve(
      $.ajax({
        type: 'POST',
        data: contactType,
        url: this.webservice + 'v1/ContactType'
      })
    );
  }
  updateContactTypeRequest(contactType) {
    return Promise.resolve(
      $.ajax({
        type: 'PUT',
        data: contactType,
        url: this.webservice + 'v1/ContactType'
      })
    );
  }


  /* Contact Register Request */
  createContactRegisterRequest(contactRegister) {
    return Promise.resolve(
      $.ajax({
        type: 'POST',
        data: contactRegister,
        url: this.webservice + 'v1/ContactRegister'
      })
    );
  }


  /* Calendar Request */
  getCalendarRequest(calendarId) {
    return Promise.resolve(
      $.ajax({
        type: 'GET',
        url: this.webservice + 'v1/Calendar/' + calendarId
      })
    );
  }
  getAllCalendarRequests() {
    return Promise.resolve(
      $.ajax({
        type: 'GET',
        url: this.webservice + 'v1/Calendar'
      })
    );
  }
  deleteCalendarRequest(calendarId) {
    return Promise.resolve(
      $.ajax({
        type: 'DELETE',
        url: this.webservice + 'v1/Calendar/' + calendarId
      })
    );
  }
  createCalendarRequest(calendar) {
    return Promise.resolve(
      $.ajax({
        type: 'POST',
        data: calendar,
        url: this.webservice + 'v1/Calendar'
      })
    );
  }
  updateCalendarRequest(calendar) {
    return Promise.resolve(
      $.ajax({
        type: 'PUT',
        data: calendar,
        url: this.webservice + 'v1/Calendar'
      })
    );
  }

  /* Calendar Event Request */
  getCalendarEventRequest(calendarEventId) {
    return Promise.resolve(
      $.ajax({
        type: 'GET',
        url: this.webservice + 'v1/CalendarEvent/' + calendarEventId
      })
    );
  }
  getAllCalendarEventRequests() {
    return Promise.resolve(
      $.ajax({
        type: 'GET',
        url: this.webservice + 'v1/CalendarEvent'
      })
    );
  }
  deleteCalendarEventRequest(calendarEventId) {
    return Promise.resolve(
      $.ajax({
        type: 'DELETE',
        url: this.webservice + 'v1/CalendarEvent/' + calendarEventId
      })
    );
  }
  createCalendarEventRequest(calendarEvent) {
    return Promise.resolve(
      $.ajax({
        type: 'POST',
        data: calendarEvent,
        url: this.webservice + 'v1/CalendarEvent'
      })
    );
  }
  updateCalendarEventRequest(calendarEvent) {
    return Promise.resolve(
      $.ajax({
        type: 'PUT',
        data: calendarEvent,
        url: this.webservice + 'v1/CalendarEvent'
      })
    );
  }

  /* Calendar Access Request */
  getCalendarAccessRequest(userId) {
    return Promise.resolve(
      $.ajax({
        type: 'GET',
        url: this.webservice + 'v1/CalendarAccess/' + userId
      })
    );
  }
  getAllCalendarAccessRequests() {
    return Promise.resolve(
      $.ajax({
        type: 'GET',
        url: this.webservice + 'v1/CalendarAccess'
      })
    );
  }
  deleteCalendarAccessRequest(userId) {
    return Promise.resolve(
      $.ajax({
        type: 'DELETE',
        url: this.webservice + 'v1/CalendarAccess/' + userId
      })
    );
  }
  createCalendarAccessRequest(calendarAccessRequest, userId) {
    return Promise.resolve(
      $.ajax({
        type: 'POST',
        data: calendarAccessRequest,
        url: this.webservice + 'v1/CalendarAccess' + userId
      })
    );
  }
  updateCalendarAccessRequest(calendarAccessRequest, userId) {
    return Promise.resolve(
      $.ajax({
        type: 'PUT',
        data: calendarAccessRequest,
        url: this.webservice + 'v1/CalendarAccess' + userId
      })
    );
  }

  /* Event Type */
  getEventTypeRequest(eventTypeId) {
    return Promise.resolve(
      $.ajax({
        type: 'GET',
        url: this.webservice + 'v1/EventType/' + eventTypeId
      })
    );
  }
  getAllEventTypeRequests() {
    return Promise.resolve(
      $.ajax({
        type: 'GET',
        url: this.webservice + 'v1/EventType'
      })
    );
  }
  deleteEventTypeRequest(eventTypeId) {
    return Promise.resolve(
      $.ajax({
        type: 'DELETE',
        url: this.webservice + 'v1/EventType/' + eventTypeId
      })
    );
  }
  createEventTypeRequest(eventType) {
    return Promise.resolve(
      $.ajax({
        type: 'POST',
        data: eventType,
        url: this.webservice + 'v1/EventType'
      })
    );
  }
  updateEventTypeRequest(eventType) {
    return Promise.resolve(
      $.ajax({
        type: 'PUT',
        data: eventType,
        url: this.webservice + 'v1/EventType'
      })
    );
  }


  /* Facility Contact */
  getFacilityContact(facilityContactId) {
    return Promise.resolve(
      $.ajax({
        type: 'GET',
        url: this.webservice + 'v1/FacilityContact/' + facilityContactId
      })
    );
  }
  getAllFacilityContacts() {
    return Promise.resolve(
      $.ajax({
        type: 'GET',
        url: this.webservice + 'v1/FacilityContact'
      })
    );
  }
  deleteFacilityContact(facilityContactId) {
    return Promise.resolve(
      $.ajax({
        type: 'DELETE',
        url: this.webservice + 'v1/FacilityContact/' + facilityContactId
      })
    );
  }
  createFacilityContact(facilityContact) {
    return Promise.resolve(
      $.ajax({
        type: 'POST',
        data: facilityContact,
        url: this.webservice + 'v1/FacilityContact'
      })
    );
  }
  updateFacilityContact(facilityContact) {
    return Promise.resolve(
      $.ajax({
        type: 'PUT',
        data: facilityContact,
        url: this.webservice + 'v1/FacilityContact'
      })
    );
  }

  /* Facility */
  getFacility(facilityId) {
    return Promise.resolve(
      $.ajax({
        type: 'GET',
        url: this.webservice + 'v1/Facility/' + facilityId
      })
    );
  }
  getAllFacilities() {
    return Promise.resolve(
      $.ajax({
        type: 'GET',
        url: this.webservice + 'v1/Facility'
      })
    );
  }
  deleteFacility(facilityId) {
    return Promise.resolve(
      $.ajax({
        type: 'DELETE',
        url: this.webservice + 'v1/Facility/' + facilityId
      })
    );
  }
  createFacility(facility) {
    return Promise.resolve(
      $.ajax({
        type: 'POST',
        data: facility,
        url: this.webservice + 'v1/Facility'
      })
    );
  }
  updateFacility(facility) {
    return Promise.resolve(
      $.ajax({
        type: 'PUT',
        data: facility,
        url: this.webservice + 'v1/Facility'
      })
    );
  }

  /* Menu Item */
  getMenuItem(menuItemId) {
    return Promise.resolve(
      $.ajax({
        type: 'GET',
        url: this.webservice + 'v1/MenuItem/' + menuItemId
      })
    );
  }
  getAllMenuItem() {
    return Promise.resolve(
      $.ajax({
        type: 'GET',
        url: this.webservice + 'v1/MenuItem'
      })
    );
  }
  deleteMenuItem(menuItemId) {
    return Promise.resolve(
      $.ajax({
        type: 'DELETE',
        url: this.webservice + 'v1/MenuItem/' + menuItemId
      })
    );
  }
  createMenuItem(menuItem) {
    return Promise.resolve(
      $.ajax({
        type: 'POST',
        data: menuItem,
        url: this.webservice + 'v1/MenuItem'
      })
    );
  }
  updateMenuItem(menuItem) {
    return Promise.resolve(
      $.ajax({
        type: 'PUT',
        data: menuItem,
        url: this.webservice + 'v1/MenuItem'
      })
    );
  }

  /* Menu Item Role */
  getMenuItemRole(menuItemRoleId) {
    return Promise.resolve(
      $.ajax({
        type: 'GET',
        url: this.webservice + 'v1/MenuItemRole/' + menuItemRoleId
      })
    );
  }
  getAllMenuItemRole() {
    return Promise.resolve(
      $.ajax({
        type: 'GET',
        url: this.webservice + 'v1/MenuItemRole'
      })
    );
  }
  deleteMenuItemRole(menuItemRoleId) {
    return Promise.resolve(
      $.ajax({
        type: 'DELETE',
        url: this.webservice + 'v1/MenuItemRole/' + menuItemRoleId
      })
    );
  }
  createMenuItemRole(menuItemRole) {
    return Promise.resolve(
      $.ajax({
        type: 'POST',
        data: menuItemRole,
        url: this.webservice + 'v1/MenuItemRole'
      })
    );
  }
  updateMenuItemRole(menuItemRole) {
    return Promise.resolve(
      $.ajax({
        type: 'PUT',
        data: menuItemRole,
        url: this.webservice + 'v1/MenuItemRole'
      })
    );
  }

  /* Resourc eHours */
  getResourceHours(resourceHoursId) {
    return Promise.resolve(
      $.ajax({
        type: 'GET',
        url: this.webservice + 'v1/ResourceHours/' + resourceHoursId
      })
    );
  }
  getAllResourceHours() {
    return Promise.resolve(
      $.ajax({
        type: 'GET',
        url: this.webservice + 'v1/ResourceHours'
      })
    );
  }
  deleteResourceHours(resourceHoursId) {
    return Promise.resolve(
      $.ajax({
        type: 'DELETE',
        url: this.webservice + 'v1/ResourceHours/' + resourceHoursId
      })
    );
  }
  createResourceHours(resourceHours) {
    return Promise.resolve(
      $.ajax({
        type: 'POST',
        data: resourceHours,
        url: this.webservice + 'v1/ResourceHours'
      })
    );
  }
  updateResourceHours(resourceHours) {
    return Promise.resolve(
      $.ajax({
        type: 'PUT',
        data: resourceHours,
        url: this.webservice + 'v1/ResourceHours'
      })
    );
  }

  /* Resource */
  getResource(resourceId) {
    return Promise.resolve(
      $.ajax({
        type: 'GET',
        url: this.webservice + 'v1/Resource/' + resourceId
      })
    );
  }
  getAllResource() {
    return Promise.resolve(
      $.ajax({
        type: 'GET',
        url: this.webservice + 'v1/Resource'
      })
    );
  }
  deleteResource(resourceId) {
    return Promise.resolve(
      $.ajax({
        type: 'DELETE',
        url: this.webservice + 'v1/Resource/' + resourceId
      })
    );
  }
  createResource(resource) {
    return Promise.resolve(
      $.ajax({
        type: 'POST',
        data: resource,
        url: this.webservice + 'v1/Resource'
      })
    );
  }
  updateResource(resource) {
    return Promise.resolve(
      $.ajax({
        type: 'PUT',
        data: resource,
        url: this.webservice + 'v1/Resource'
      })
    );
  }

  /* Resource Type */
  getResourceType(resourceTypeId) {
    return Promise.resolve(
      $.ajax({
        type: 'GET',
        url: this.webservice + 'v1/ResourceType/' + resourceTypeId
      })
    );
  }
  getAllResourceType() {
    return Promise.resolve(
      $.ajax({
        type: 'GET',
        url: this.webservice + 'v1/ResourceType'
      })
    );
  }
  deleteResourceType(resourceTypeId) {
    return Promise.resolve(
      $.ajax({
        type: 'DELETE',
        url: this.webservice + 'v1/ResourceType/' + resourceTypeId
      })
    );
  }
  createResourceType(resourceType) {
    return Promise.resolve(
      $.ajax({
        type: 'POST',
        data: resourceType,
        url: this.webservice + 'v1/ResourceType'
      })
    );
  }
  updateResourceType(resourceType) {
    return Promise.resolve(
      $.ajax({
        type: 'PUT',
        data: resourceType,
        url: this.webservice + 'v1/ResourceType'
      })
    );
  }

  /* Nexmo Conversation */
  getNexmoConversation(nexmoConversationId) {
    return Promise.resolve(
      $.ajax({
        type: 'GET',
        url: this.webservice + 'v1/NexmoConversation/' + nexmoConversationId
      })
    );
  }
  getAllNexmoConversation() {
    return Promise.resolve(
      $.ajax({
        type: 'GET',
        url: this.webservice + 'v1/NexmoConversation'
      })
    );
  }
  deleteNexmoConversation(nexmoConversationId) {
    return Promise.resolve(
      $.ajax({
        type: 'DELETE',
        url: this.webservice + 'v1/NexmoConversation/' + nexmoConversationId
      })
    );
  }
  createNexmoConversation(nexmoConversation) {
    return Promise.resolve(
      $.ajax({
        type: 'POST',
        data: nexmoConversation,
        url: this.webservice + 'v1/NexmoConversation'
      })
    );
  }
  updateNexmoConversation(nexmoConversation) {
    return Promise.resolve(
      $.ajax({
        type: 'PUT',
        data: nexmoConversation,
        url: this.webservice + 'v1/NexmoConversation'
      })
    );
  }

  /* Nexmo Inbound */
  getNexmoInbound(nexmoInboundId) {
    return Promise.resolve(
      $.ajax({
        type: 'GET',
        url: this.webservice + 'v1/NexmoInbound/' + nexmoInboundId
      })
    );
  }
  getAllNexmoInbound() {
    return Promise.resolve(
      $.ajax({
        type: 'GET',
        url: this.webservice + 'v1/NexmoInbound'
      })
    );
  }
  deleteNexmoInbound(nexmoInboundId) {
    return Promise.resolve(
      $.ajax({
        type: 'DELETE',
        url: this.webservice + 'v1/NexmoInbound/' + nexmoInboundId
      })
    );
  }
  createNexmoInbound(nexmoInbound) {
    return Promise.resolve(
      $.ajax({
        type: 'POST',
        data: nexmoInbound,
        url: this.webservice + 'v1/NexmoInbound'
      })
    );
  }
  updateNexmoInbound(nexmoInbound) {
    return Promise.resolve(
      $.ajax({
        type: 'PUT',
        data: nexmoInbound,
        url: this.webservice + 'v1/NexmoInbound'
      })
    );
  }

  /* Resource Appt Request */
  getResourceApptRequest(resourceApptRequestId) {
    return Promise.resolve(
      $.ajax({
        type: 'GET',
        url: this.webservice + 'v1/ResourceApptRequest/' + resourceApptRequestId
      })
    );
  }
  getAllResourceApptRequest() {
    return Promise.resolve(
      $.ajax({
        type: 'GET',
        url: this.webservice + 'v1/ResourceApptRequest'
      })
    );
  }
  deleteResourceApptRequest(resourceApptRequestId) {
    return Promise.resolve(
      $.ajax({
        type: 'DELETE',
        url: this.webservice + 'v1/ResourceApptRequest/' + resourceApptRequestId
      })
    );
  }
  createResourceApptRequest(resourceApptRequest) {
    return Promise.resolve(
      $.ajax({
        type: 'POST',
        data: resourceApptRequest,
        url: this.webservice + 'v1/ResourceApptRequest'
      })
    );
  }
  updateResourceApptRequest(resourceApptRequest) {
    return Promise.resolve(
      $.ajax({
        type: 'PUT',
        data: resourceApptRequest,
        url: this.webservice + 'v1/ResourceApptRequest'
      })
    );
  }


  /* Resource Availability Request */
  getResourceAvailability() {
    return Promise.resolve(
      $.ajax({
        type: 'GET',
        url: this.webservice + 'v1/ResourceAvailability'
      })
    );
  }

  /* Menu Request */
  getMenu() {
    return Promise.resolve(
      $.ajax({
        type: 'GET',
        url: this.webservice + 'v1/Menu'
      })
    );
  }

  /* Request Logs */
  getRequestLogs() {
    return Promise.resolve(
      $.ajax({
        type: 'GET',
        url: this.webservice + 'v1/requestlogs'
      })
    );
  }




}
