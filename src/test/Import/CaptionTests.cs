﻿using Dime.Scheduler.Sdk.Import;
using Xunit;

namespace Dime.Scheduler.Sdk.Tests.Import
{
    public class CaptionTests
    {
        [Fact]
        public void Caption_ToImportRequest_Append_AllShouldMapParameters()
        {
            Caption model = new()
            {
                Context = 1,
                FieldName = "FIELD",
                Language = "LANG",
                SourceTable = "TABLE",
                Text = "TXT"
            };

            ImportRequest importRequest = model.ToImportRequest(TransactionType.Append);
            importRequest.AssertEqualParameterCollectionCount();
        }

        [Fact]
        public void Caption_ToImportRequest_Delete_AllShouldMapParameters()
        {
            Caption model = new()
            {
                Context = 1,
                FieldName = "FIELD",
                Language = "LANG",
                SourceTable = "TABLE",
                Text = "TXT"
            };

            ImportRequest importRequest = model.ToImportRequest(TransactionType.Delete);
            importRequest.AssertEqualParameterCollectionCount();
        }

        [Fact]
        public void Caption_ToImportRequest_InvalidTransactionType_ShouldThrowArgumentOutOfRangeException() 
            => ToImportRequestTestUtils.TestToInvalidImportRequest<Caption>();
    }
}