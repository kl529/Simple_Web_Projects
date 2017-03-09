import java.util.Scanner;

public class Name {
	Scanner scan = new Scanner(System.in);
	
	public void main(){
		
		System.out.println("1)name 2)Intoduce : ");
		int i = scan.nextInt();
		
		if (i==1){
			System.out.println(name());
		}
		
	}

	public String name(){
		String myname = "LeeJunGi";
		return myname;
	}
	
	public static void main(String[] args) {
		Name n = new Name();
		n.main();

	}
}
