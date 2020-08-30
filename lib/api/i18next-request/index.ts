import { PureRestRequest } from '@mihanizm56/fetch-api';
import Joi from '@hapi/joi';

export const i18nextRequest = (requestUrl: string) =>
  new PureRestRequest().getRequest({
    extraValidationCallback: () => true,
    endpoint: requestUrl,
    parseType: 'json',
    customTimeout: 3000,
    responseSchema: Joi.object({
      translate: Joi.object(),
    }),
  });
