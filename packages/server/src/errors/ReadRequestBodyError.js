import { BaseError } from '@tevm/errors'

/**
 * Parameters for constructing a {@link ReadRequestBodyError}.
 * @typedef {Object} ReadRequestBodyErrorParameters
 * @property {string} [docsBaseUrl] - Base URL for the documentation.
 * @property {string} [docsPath] - Path to the documentation.
 * @property {string} [docsSlug] - Slug for the documentation.
 * @property {string[]} [metaMessages] - Additional meta messages.
 * @property {import('@tevm/errors').BaseError|Error} [cause] - The cause of the error.
 * @property {string} [details] - Details of the error.
 * @property {object} [meta] - Optional object containing additional information about the error.
 */

/**
 * Represents an error that occurs when reading the request body from an HTTP request fails.
 *
 * This error is typically encountered when there is an issue with reading the request body, such as a network error or a problem with the incoming request stream.
 * @param {string} message - A human-readable error message.
 * @param {ReadRequestBodyErrorParameters} [args={}] - Additional parameters for the ReadRequestBodyError.
 * @property {'ReadRequestBodyError'} _tag - Same as name, used internally.
 * @property {'ReadRequestBodyError'} name - The name of the error, used to discriminate errors.
 * @property {string} message - Human-readable error message.
 * @property {object} [meta] - Optional object containing additional information about the error.
 * @property {number} code - Error code, analogous to the code in JSON RPC error.
 * @property {string} docsPath - Path to the documentation for this error.
 * @property {string[]} [metaMessages] - Additional meta messages for more context.
 */
export class ReadRequestBodyError extends BaseError {
	/**
	 * Constructs a ReadRequestBodyError.
	 *
	 * @param {string} message - Human-readable error message.
	 * @param {ReadRequestBodyErrorParameters} [args={}] - Additional parameters for the ReadRequestBodyError.
	 */
	constructor(message, args = {}) {
		super(
			message,
			{
				...args,
				docsBaseUrl: 'https://tevm.sh',
				docsPath: '/reference/tevm/errors/classes/readrequestbodyerror/',
			},
			'ReadRequestBodyError',
		)
	}
}
