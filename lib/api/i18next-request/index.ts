import { PureRestRequest } from '@mihanizm56/fetch-api';
import Joi from '@hapi/joi';

type ParamsType = {
  endpoint: string;
  requestTimeout?: number;
  isErrorTextStraightToOutput?: boolean;
  responseSchema?: any; // can be possible to use any schema
};

const DEFAULT_SCHEMA = Joi.object({
  translate: Joi.object(),
});

export const i18nextRequest = ({
  endpoint,
  requestTimeout,
  isErrorTextStraightToOutput = true,
  responseSchema = DEFAULT_SCHEMA,
}: ParamsType) =>
  new PureRestRequest().getRequest({
    extraValidationCallback: () => true,
    endpoint,
    parseType: 'json',
    customTimeout: requestTimeout,
    responseSchema,
    isErrorTextStraightToOutput,
    retry: 3,
  });
