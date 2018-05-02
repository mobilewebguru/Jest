/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

export const usage = 'Usage: $0 [--config=<pathToConfigFile>] <file>';

export const options = {
  cache: {
    default: true,
    description:
      'Whether to use the preprocessor cache. Disable ' +
      'the cache using --no-cache.',
    type: 'boolean',
  },
  config: {
    alias: 'c',
    description: 'The path to a Jest config file.',
    type: 'string',
  },
  debug: {
    description: 'Print debugging info about your jest config.',
    type: 'boolean',
  },
  version: {
    alias: 'v',
    description: 'Print the version and exit',
    type: 'boolean',
  },
  watchman: {
    default: true,
    description:
      'Whether to use watchman for file crawling. Disable using ' +
      '--no-watchman.',
    type: 'boolean',
  },
};
