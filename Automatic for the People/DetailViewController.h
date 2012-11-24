//
//  DetailViewController.h
//  Automatic for the People http://github.com/apontious/Automatic-for-the-People
//
//  Created by Andrew Pontious on 11/23/12.
//  Copyright (c) 2012 Andrew Pontious.
//  Some right reserved: http://opensource.org/licenses/mit-license.php
//

#import <UIKit/UIKit.h>

@interface DetailViewController : UIViewController

@property (strong, nonatomic) id detailItem;

@property (weak, nonatomic) IBOutlet UILabel *detailDescriptionLabel;
@end
