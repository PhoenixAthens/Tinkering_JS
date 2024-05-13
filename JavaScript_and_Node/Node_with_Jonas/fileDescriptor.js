const fs = require("fs");
let path = "/Users/anmolkhanna/Downloads/Scrap_Use/ForeverThread.java";
let data = `
  //Java class that creates a thread that runs infinitely!
  class CPUWaster extends Thread{
      public void run(){
          while(true){}
      }

  }
  public class ForeverThread {
      public static void main(String... args) throws InterruptedException{
          Runtime rt = Runtime.getRuntime();
          long usedKB = (rt.totalMemory() - rt.freeMemory()) / 1024;
          System.out.format("Process ID: %d\n", ProcessHandle.current().pid());
          System.out.format("Thread Count: %d\n",Thread.activeCount());
          System.out.format("Memory Usage: %d\n",usedKB);

          //Start 6 new threads
          System.out.println("\nStarting 6 CPUWaster threads...\n");
          for(int i=0;i<6;i++)
              new CPUWaster().start();

          usedKB = (rt.totalMemory() - rt.freeMemory()) / 1024;
          System.out.format("Process ID: %d\n", ProcessHandle.current().pid());
          System.out.format("Thread Count: %d\n",Thread.activeCount());
          System.out.format("Memory Usage: %d\n",usedKB);
      }
  }
`;
let fd;
try {
  fd = fs.openSync(path, "r+");
} catch (err) {
  console.error(err);
}
console.log(fd); //14
let currentData = fs.readFileSync(fd, "utf-8");
console.log(`Current Data in File: ${currentData}`);

fs.writeFileSync(fd, data);
//if we obtain the file-descriptor only for reading, i.e,
//use the `r`, when opening file, we get a file-descriptor that can be used only for reading purposes

//however, if we use something like `r+`
//this file-descriptor can be used for both reading from and writing to the file
