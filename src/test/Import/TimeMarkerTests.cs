﻿using Dime.Scheduler.Sdk.Import;
using Xunit;

namespace Dime.Scheduler.Sdk.Tests.Import
{
    public class TimeMarkerTests
    {
        [Fact]
        public void TimeMarker_ToImportRequest_Append_AllShouldMapParameters()
        {
            TimeMarker model = new()
            {
                Name = "MARKER 1",
                Color = "BLUE"
            };

            ImportRequest importRequest = model.ToImportRequest(TransactionType.Append);
            importRequest.AssertEqualParameterCollectionCount();
        }

        [Fact]
        public void TimeMarker_ToImportRequest_Delete_AllShouldMapParameters()
        {
            TimeMarker model = new("Hello world", "Blue");
            ImportRequest importRequest = model.ToImportRequest(TransactionType.Delete);
            importRequest.AssertEqualParameterCollectionCount();
        }
    }
}