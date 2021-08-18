handleMergeData = (source = [], data = []) => {
  let flag = true;
  let mergeData = [];
  if (!source || !source.length || (Math.abs(source.length - data.length > 1))) return data || [];
  mergeData = source.map((item, index) => {
    if (item.Name === (data[index] && data[index].Name)) {
      item.Id = data[index].Id;
      item.Label = data[index].Label;
      item.ToolTip = data[index].ToolTip;
    }
    return item;
  });
  if (source.length - data.length === -1) mergeData.push(data[data.length - 1]);
  return mergeData;
}
let data = [
  {
    Id: "3bcd72e69143",
    Name: "ListBack",
    Text: "返回",
    IsSelected: false,
    FormFieldType: null,
    ListViewType: 0,
    ToolTip: "返回上一页(系统级别)",
    IsEdit: false,
  },
  {
    Id: "87870065-9e6c-4614-a0d4-42dedb24e3b6",
    Name: "Evaluation.Create",
    Text: "新建",
    IsSelected: false,
    FormFieldType: null,
    ListViewType: 0,
    ToolTip: "详情页子集新建按钮",
    IsEdit: false,
  },
  {
    Id: "91f5ad7b-6c6d-43db-8b18-5b1c8a3157c4",
    Name: "exttestPrintNew",
    Text: "testPrintNew",
    IsSelected: false,
    FormFieldType: null,
    ListViewType: 0,
    ToolTip: "desc:testPrintNew",
    IsEdit: true,
  },
  {
    Id: "9fceac07-2f5d-4aef-ba47-10c71fefccca",
    Name: "exteditAll",
    Text: "批量编辑",
    IsSelected: false,
    FormFieldType: null,
    ListViewType: 0,
    ToolTip: "desc： editAll",
    IsEdit: false,
  }
]
let source= [
  {
    Id: "a5a60919-fcfd-483f-895f-3bcd72e69143",
    Name: "ListBack",
    Text: "返回",
    IsSelected: true,
    FormFieldType: null,
    ListViewType: 0,
    ToolTip: "返回上一页(系统级别)",
    IsEdit: false,
  },
  {
    Id: "87870065-9e6c-4614-a0d4-42dedb24e3b6",
    Name: "Evaluation.Create",
    Text: "新建",
    IsSelected: true,
    FormFieldType: null,
    ListViewType: 0,
    ToolTip: "详情页子集新建按钮",
    IsEdit: false,
  },
  {
    Id: "91f5ad7b-6c6d-43db-8b18-5b1c8a3157c4",
    Name: "exttestPrintNew",
    Text: "testPrintNew",
    IsSelected: true,
    FormFieldType: null,
    ListViewType: 0,
    ToolTip: "desc:testPrintNew",
    IsEdit: true,
  }]
console.log(handleMergeData(source,data))
