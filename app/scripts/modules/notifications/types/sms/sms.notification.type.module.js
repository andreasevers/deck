'use strict';

let angular = require('angular');

require('./additionalFields.html');

module.exports = angular.module('spinnaker.notification.types.sms', [])
  .config(function(notificationTypeConfigProvider) {
    notificationTypeConfigProvider.registerNotificationType({
      label: 'SMS',
      key: 'sms',
      addressTemplateUrl: 'app/scripts/modules/notifications/types/sms/additionalFields.html',
    });
  }).name;
