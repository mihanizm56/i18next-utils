import { JSONRPCRequest } from '@mihanizm56/fetch-api';
import Joi from '@hapi/joi';

type ParamsType = {
  requestTimeout?: number;
  namespace?: string;
};

const ENDPOINT = '/I18N/getLanguages';

export const getLanguagesRequest = ({
  requestTimeout,
  namespace = 'root',
}: ParamsType) =>
  new JSONRPCRequest().makeRequest({
    extraValidationCallback: () => true,
    endpoint: ENDPOINT,
    parseType: 'json',
    customTimeout: requestTimeout,
    responseSchema: Joi.object({
      languages: Joi.array().items(Joi.string().required()),
    }),
    body: { params: { ns: namespace } },
  });
