//
//  MasterViewController.h
//  Automatic for the People http://github.com/apontious/Automatic-for-the-People
//
//  Created by Andrew Pontious on 11/23/12.
//  Copyright (c) 2012 Andrew Pontious.
//  Some right reserved: http://opensource.org/licenses/mit-license.php
//

#import <UIKit/UIKit.h>

#import <CoreData/CoreData.h>

@interface MasterViewController : UITableViewController <NSFetchedResultsControllerDelegate>

@property (strong, nonatomic) NSFetchedResultsController *fetchedResultsController;
@property (strong, nonatomic) NSManagedObjectContext *managedObjectContext;

@end
