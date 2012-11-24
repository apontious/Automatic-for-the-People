//
//  AppDelegate.h
//  Automatic for the People http://github.com/apontious/Automatic-for-the-People
//
//  Created by Andrew Pontious on 11/23/12.
//  Copyright (c) 2012 Andrew Pontious.
//  Some right reserved: http://opensource.org/licenses/mit-license.php
//

#import <UIKit/UIKit.h>

@interface AppDelegate : UIResponder <UIApplicationDelegate>

@property (strong, nonatomic) UIWindow *window;

@property (readonly, strong, nonatomic) NSManagedObjectContext *managedObjectContext;
@property (readonly, strong, nonatomic) NSManagedObjectModel *managedObjectModel;
@property (readonly, strong, nonatomic) NSPersistentStoreCoordinator *persistentStoreCoordinator;

- (void)saveContext;
- (NSURL *)applicationDocumentsDirectory;

@end
