//
//  Automatic for the People UI Automation Script.js
//  Automatic for the People http://github.com/apontious/Automatic-for-the-People
//
//  Created by Andrew Pontious on 11/23/12.
//  Copyright (c) 2012 Andrew Pontious.
//  Some right reserved: http://opensource.org/licenses/mit-license.php
//

addRowTest()
deleteRowTest()


function addRowTest() {
    UIALogger.logStart("Starting Add Row Test")
    
    var tableView = UIATarget.localTarget().frontMostApp().mainWindow().tableViews()[0]
    
    var addButton = UIATarget.localTarget().frontMostApp().navigationBar().buttons()["Add Entry"]
    
    var oldCount = tableView.cells().length
    var expectedCount = oldCount + 1
    
    addButton.tap()

    var newCount
    
    for (var i = 0; i < 12; i++) {
        newCount = tableView.cells().length
        
        if (newCount == expectedCount) {
            UIALogger.logPass("Added entry correctly")
            break
        }   
        
        UIATarget.localTarget().delay(.25)
        UIALogger.logDebug("Delaying...")
    }
    
    if (newCount != expectedCount) {
        UIALogger.logFail("Pressing Add Entry (plus) button should result in " + expectedCount + " rows, but instead resulted in " + newCount + " rows")
    }
}

function deleteRowTest() {
	UIALogger.logStart("Starting Delete Row Test")
    
    var tableView = UIATarget.localTarget().frontMostApp().mainWindow().tableViews()[0]
    
	var lastRow = tableView.cells()[tableView.cells().length -1]
    
	lastRow.flickInsideWithOptions({startOffset:{x:0.9, y:0.5}, endOffset:{x:0.0, y:0.5}})
	
	var deleteButton = lastRow.buttons().firstWithPredicate("name beginswith 'Confirm Deletion'")
    
    var oldCount = tableView.cells().length
	var expectedCount = oldCount - 1
	
	deleteButton.tap()
	
    var newCount
    
    for (var i = 0; i < 12; i++) {
        newCount = tableView.cells().length
        
        if (newCount == expectedCount) {
            UIALogger.logPass("Deleted entry correctly")
            break
        }
        
        UIATarget.localTarget().delay(.25)
        UIALogger.logDebug("Delaying...")
    }
    
    if (newCount != expectedCount) {
		UIALogger.logFail("Deleting last entry should result in " + expectedCount + " rows, but instead resulted in " + newCount + " rows")
    }
}