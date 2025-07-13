export class AppConfigService {
  private static instance: AppConfigService | null = null;

  private constructor(
    public readonly companyName: string,
    public readonly footer: string
  ) {}

  public static getInstance(): AppConfigService {
    if (!AppConfigService.instance) {
      AppConfigService.instance = new AppConfigService("Acme Inc.", "Confidential");
    }
    return AppConfigService.instance;
  }
}
