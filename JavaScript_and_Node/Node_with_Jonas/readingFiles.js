const fs = require("fs");
let path = "/Users/anmolkhanna/Downloads/Scrap_Use/ForeverThread.java";
let fileData = fs.readFileSync(path, "utf-8");
console.log(fileData);
//if we comment out the encoding
//OUTPUT: <Buffer 2f 2f 4a 61 76 61 20 63 6c 61 73 73 20 74 68 61 74 20 63 72 65 61 74 65 73 20 61 20 74 68 72 65 61 64 20 74 68 61 74 20 72 75 6e 73 20 69 6e 66 69 6e ... 948 more bytes>

//otherwise
//Java class that creates a thread that runs infinitely!
// class CPUWaster extends Thread{
//     public void run(){
//         while(true){}
//     }

// }
// public class ForeverThread {
//     public static void main(String... args) throws InterruptedException{
//         Runtime rt = Runtime.getRuntime();
//         long usedKB = (rt.totalMemory() - rt.freeMemory()) / 1024;
//         System.out.format("Process ID: %d\n", ProcessHandle.current().pid());
//         System.out.format("Thread Count: %d\n",Thread.activeCount());
//         System.out.format("Memory Usage: %d\n",usedKB);

//         //Start 6 new threads
//         System.out.println("\nStarting 6 CPUWaster threads...\n");
//         for(int i=0;i<6;i++)
//             new CPUWaster().start();

//         usedKB = (rt.totalMemory() - rt.freeMemory()) / 1024;
//         System.out.format("Process ID: %d\n", ProcessHandle.current().pid());
//         System.out.format("Thread Count: %d\n",Thread.activeCount());
//         System.out.format("Memory Usage: %d\n",usedKB);
//     }
// }
fs.writeFileSync(path, "//I am new here, anyone knows the wifi-passwd?");
//this method overwrites the file with new data
