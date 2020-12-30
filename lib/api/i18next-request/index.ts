import { PureRestRequest } from '@mihanizm56/fetch-api';
import Joi from '@hapi/joi';

type ParamsType = {
  endpoint: string;
  requestTimeout?: number;
};

export const i18nextRequest = ({ endpoint, requestTimeout }: ParamsType) =>
  new PureRestRequest().getRequest({
    extraValidationCallback: () => true,
    endpoint,
    parseType: 'json',
    customTimeout: requestTimeout,
    responseSchema: Joi.object({
      translate: Joi.object(),
    }),
    isErrorTextStraightToOutput: true,
  });
