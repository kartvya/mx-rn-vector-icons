
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNMxRnVectorIconsSpec.h"

@interface MxRnVectorIcons : NSObject <NativeMxRnVectorIconsSpec>
#else
#import <React/RCTBridgeModule.h>

@interface MxRnVectorIcons : NSObject <RCTBridgeModule>
#endif

@end
