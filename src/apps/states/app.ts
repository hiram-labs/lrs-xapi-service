import { Router } from 'express';
import AppConfig from './AppConfig';
import presenterFactory from './expressPresenter';
import repoFactory from './repo/factory';
import serviceFactory from './service';
import enTranslator from './translatorFactory/en';

export default (appConfig: AppConfig): Router => {
  const translator = enTranslator;
  const repo = repoFactory({
    auth: {
      factoryName: appConfig.repo.factory.authRepoName,
      mongo: {
        db: appConfig.repo.mongo.db
      },
      test: {}
    },
    models: {
      factoryName: appConfig.repo.factory.modelsRepoName,
      mongo: {
        db: appConfig.repo.mongo.db
      }
    },
    storage: {
      factoryName: appConfig.repo.factory.storageRepoName,
      local: {
        storageDir: `${appConfig.repo.local.storageDir}/${appConfig.repo.storageSubFolder}`
      },
      s3: {
        awsConfig: appConfig.repo.s3.awsConfig,
        bucketName: appConfig.repo.s3.bucketName,
        subFolder: appConfig.repo.storageSubFolder
      }
    }
  });
  const service = serviceFactory({ repo });
  const presenter = presenterFactory({
    bodyParserLimit: appConfig.presenter.express.bodyParserLimit,
    customRoute: 'xAPI/activities/state/status',
    customRouteText: 'ok',
    logger: appConfig.logger,
    morganDirectory: appConfig.presenter.express.morganDirectory,
    service,
    tracker: appConfig.tracker,
    translator
  });
  return presenter;
};
