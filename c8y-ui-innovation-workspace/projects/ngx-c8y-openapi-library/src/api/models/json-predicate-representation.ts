/* tslint:disable */
/* eslint-disable */

/**
 * Represents a predicate for verification. It acts as a condition which is necessary to assign a user to the given groups, permit access to the specified applications or to assign specific inventory roles to device groups.
 */
export interface JsonPredicateRepresentation {

  /**
   * Nested predicates.
   */
  childPredicates?: Array<JsonPredicateRepresentation>;

  /**
   * Operator executed on the parameter from the JWT access token claim pointed by `parameterPath` and the provided parameter `value`.
   */
  operator?: 'EQ' | 'NEQ' | 'GT' | 'LT' | 'GTE' | 'LTE' | 'IN' | 'AND' | 'OR';

  /**
   * Path to the claim from the JWT access token from the external authorization server.
   */
  parameterPath?: string;

  /**
   * Given value used for parameter verification.
   */
  value?: string;
}
