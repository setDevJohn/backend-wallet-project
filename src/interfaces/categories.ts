export interface CategoryModel {
  id: number;
  name: string;
}

export type CategoryFormPayloadDTO = Omit<CategoryModel, "id">;

export type UpdateCategoryPayloadDTO = CategoryModel;

export type FindManyCategoryListResponse = CategoryModel[];

export type FindOneParamsDTO = {
  id?: number;
  name?: string;
  excludeId?: number;
};
